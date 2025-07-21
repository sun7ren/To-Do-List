import { Playfair_700Bold } from "@expo-google-fonts/playfair";
import { useFonts } from "expo-font";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

interface TaskItem {
  text: string;
  key: number;
  check: boolean;
}

const Index = () => {
  const [fontsLoaded] = useFonts({
    Playfair_700Bold,
  });

  const [inputValue, setInputValue] = useState<string>('');
  const [task, setTask] = useState<TaskItem[]>([]);

  if (!fontsLoaded) {
    return (
      <SafeAreaProvider>
        <SafeAreaView>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Loading fonts...</Text>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  const handleToDo = () => {
    if (inputValue.length > 0) {
      setTask([...task, { text: inputValue, key: Date.now(), check: false}]);
      setInputValue('');
    }
  };

  const handleDelete = (key: number) => {
    setTask(task.filter((item) => item.key !== key));
  };

  const handleCheck = (key: number) => {
  setTask(
    task.map((item) =>
      item.key === key ? { ...item, check: !item.check } : item
      )
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={[styles.playfair, { marginHorizontal: 25, marginTop: 25 }]}>To Do List</Text>
        <View>
          <Link href="/progress" style={[styles.background, { marginHorizontal: 20, marginTop: 5, marginBottom: 10 }]}>
            <Text style={[styles.playfair, { fontSize: 20 }]}> View Your Progress </Text>
          </Link>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Enter your task"
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
          />
          <TouchableOpacity style={styles.button} onPress={handleToDo}>
            <Text style={{ color: 'white' }}>Add</Text>
          </TouchableOpacity>
        </View>

        {task.length == 0 ? (
          <View style={{justifyContent: "center"}}>
            <Image source={require('/Users/arininurazizah/todo_list/assets/images/noTasks.png')} style={styles.image}/>
            <Text style={[styles.playfair, {textAlign: 'center', fontSize: 20, marginVertical: 20, color: 'rgba(126, 61, 113, 1)'}]}> No Tasks yet </Text>
          </View>
        ): <ScrollView>
              {task.map((item) => (
                <View key={item.key} style={[styles.list, 
                {flexDirection: 'column', 
                backgroundColor: item.check? 'rgba(253, 251, 221, 1)': 'rgba(255, 236, 251, 1)',
                borderColor: item.check? 'rgba(210, 196, 74, 1)': 'rgba(163, 87, 146, 1)'}]}>
                  <Text style={[styles.task, {textDecorationLine: item.check? 'line-through' : 'none'}]}>{item.text}</Text>
                  <View style={{flexDirection: 'row'}}> 
                    <TouchableOpacity style={[styles.deleteButton, {backgroundColor: item.check? 'rgba(200, 196, 89, 1)': 'rgba(162, 91, 148, 1)'}]} onPress={() => handleDelete(item.key)}>
                      <Text style={{ color: 'white', textAlign: 'center' }}>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.checkButton, {backgroundColor: item.check? 'rgba(200, 196, 89, 1)': 'rgba(162, 91, 148, 1)'}]} onPress={() => handleCheck(item.key)}>
                      <Text style={{ color: 'white', textAlign: 'center' }}>Check</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </ScrollView>
        }

        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Index;

const styles = StyleSheet.create({
  playfair: {
    fontSize: 30,
    fontFamily: "Playfair_700Bold",
  },
  input: {
    padding: 10,
    borderColor: 'darkgray',
    borderWidth: 1,
    marginVertical: 3,
    marginLeft: 20,
    marginRight: 10,
    height: 40,
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'rgba(162, 91, 148, 1)',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    marginRight: 20,
  },
  background: {
    backgroundColor: 'rgba(212, 128, 194, 1)',
    borderRadius: 10,
    padding: 10,
    color: 'white',
  },
  task: {
    fontSize: 18,
    fontFamily: "Playfair_700Bold",
  },
  deleteButton: {
    backgroundColor: 'rgba(162, 91, 148, 1)',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
    marginRight: 5
  },
  list: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(174, 128, 164, 1)',
  },
  image:{
    marginTop: 30,
    marginLeft: 95,
    alignItems: 'center',
    width: 200,
    height: 200
  },
  checkButton: {
    backgroundColor: 'rgba(162, 91, 148, 1)',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  }
});
