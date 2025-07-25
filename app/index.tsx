import { Playfair_700Bold } from "@expo-google-fonts/playfair";
import { useFonts } from "expo-font";
import { Link } from "expo-router";
import React, { useState } from "react";
import { ActivityIndicator, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Footer from "./footer";
import { styles } from './styles';

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
  const [countTask, setCountTask] = useState(0);
  const [countCheck, setCountCheck] = useState(0);

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
      setCountTask(countTask + 1)
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
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={[styles.playfair, { marginHorizontal: 25, marginTop: 25 }]}>To Do List</Text>
        
        <View>
          <View style={[styles.background, { marginHorizontal: 20, marginTop: 5, marginBottom: 5 }]}>
            <Text style={[styles.playfair, { fontSize: 20 }]}> Your Progress </Text>
            {countTask == 0 ? <Text> 0 %</Text> : <Text> {Math.round((countCheck / countTask) * 100)} % </Text>}
          </View>
          <View style={{flexDirection: 'row', marginLeft: 15, marginBottom: 15}}>
            <Text style={[styles.box, styles.playfair, {fontSize: 18, paddingRight: 35}]}> {countTask} {'\n'} Amount of Tasks </Text>
            <Text style={[styles.box, styles.playfair, {fontSize: 18, paddingRight: 20}]}> {countCheck} {'\n'} Completed Tasks </Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Enter your task"
            value={inputValue}
            onChangeText={(inputValue) => setInputValue(inputValue)}
          />
          <TouchableOpacity style={styles.button} onPress={() => {handleToDo();}}>
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
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={[styles.task, {textDecorationLine: item.check? 'line-through' : 'none'}]}>{item.text}</Text>
                    <Text style={[styles.playfair, {fontSize: 12, color: 'rgba(125, 74, 115, 1)'}]}> {new Date(item.key).toString()} </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}> 
                    <TouchableOpacity style={[styles.deleteButton, {backgroundColor: item.check? 'rgba(200, 196, 89, 1)': 'rgba(162, 91, 148, 1)'}]} onPress={() => {handleDelete(item.key); setCountTask(countTask - 1); countCheck > 0 ? setCountCheck(countCheck - 1): countCheck}}>
                      <Text style={{ color: 'white', textAlign: 'center' }}>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.checkButton, {backgroundColor: item.check? 'rgba(200, 196, 89, 1)': 'rgba(162, 91, 148, 1)'}]} onPress={() => {handleCheck(item.key); item.check ? setCountCheck(countCheck - 1): setCountCheck(countCheck + 1)}}>
                      <Text style={{ color: 'white', textAlign: 'center' }}>Check</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </ScrollView>
        }

        <View style={{backgroundColor: 'purple', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20, padding: 8, borderRadius: 10, width: 180, alignSelf: 'center', marginBottom: 15}}>
          <Link href="/quotes" style={[styles.playfair, {color: 'white', fontSize: 20}]}>Need Motivation?</Link>
        </View>

        <Footer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Index;
export { TaskItem };
