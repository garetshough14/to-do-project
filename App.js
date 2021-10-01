import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';


export default function App() {
  const [itemCount, setItemCount]= useState(2);
  const [items, setItems] = useState({
    1: 'first item',
    2: 'second item',
  });

  const [itemText, setItemText]= useState(''); // itemText is defining a variable, setItemText is a function that is letting you change the variable itemText or in other words set it
  
  let newItemText = ''; 

  const onChangeText = (text) =>{
    newItemText = text;
  }

  const validityCheck = () =>{
    console.log(newItemText.length);
    if (newItemText.length > 0){
      Alert.alert("Task Submitted");
    }
    else{
      Alert.alert('Invalid Input')
    }
  };

  return (
    <View style={styles.container}>
      <Text>Enter your task</Text>
      <TextInput 
      style={styles.userInput}
      onChangeText={text => onChangeText(text)} // the first iteration of text is simply defining the variable, onChange(Text) is a function letting you store the TextInput in text 
      placeholder='Please Enter your task'
      />
      <Button
      style={styles.submitButton}
      title="Submit Task"
      onPress= {() => validityCheck()} // another way to write {() => validityCheck()} is on line 47
      />
      <Button
      style={styles.clearButton}
      title="Clear Task"
      onPress={validityCheck} // check line 42
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInput:{
    width: '300px',
    height: '50px',
    backgroundColor: 'grey',
    color: 'black',
    placeholderTextColor: 'black',
  },
  submitButton:{
    backgroundColor: 'green'

  },
  clearButton: {
    backgroundColor: 'red'
  },
  Button:{
    flex: 1,
    flexDirection: 'row',
  }
});

// Make text box with a submit task and clear task button**********
// if you click "submit task" check to see if the submission is a string or empty, if empty alert "not valid"
// if you click clear on a  already made task remove the task from the shown list
// if the input is a success alert "task submitted"
