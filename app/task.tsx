import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Task = ({ text, checked, setChecked, deleteTask }) => {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={setChecked} style={styles.checkbox}>
        {checked && <Ionicons name="checkmark" size={18} color="white" />}
      </TouchableOpacity>

      <Text style={[styles.taskText, checked && styles.checkedText]}>
        {text}
      </Text>

      <TouchableOpacity onPress={deleteTask}>
        <Ionicons name="trash-bin" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#7E3D71',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor: '#7E3D71',
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  checkedText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});
