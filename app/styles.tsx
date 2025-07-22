import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
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
    backgroundColor: 'rgba(255, 206, 244, 1)',
    borderWidth: 1,
    borderColor:'rgba(255, 183, 239, 1)',
    borderRadius: 10,
    padding: 10,
    color: 'rgba(125, 74, 115, 1)',
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
  },
  box: {
    backgroundColor: 'rgba(212, 128, 194, 1)',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    color: 'white'
  }
});
