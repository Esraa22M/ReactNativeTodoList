import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddTodo from './src/components/add-todo';
import TodosList from './src/components/todos-list';
export default function App() {
  let [todos , setTodos]=useState([])
  const todoAdded=(todo)=>{
      setTodos([...todos, todo])
  }
  const removeitem = (title)=>{
    let Ditem = todos.filter(item=>item.title != title);
    setTodos(Ditem)
  }

  return (
    <View style={{height:'100%'}} >
      <StatusBar hidden />
      <AddTodo  onTodoAdd={todoAdded} Count={todos.length} ></AddTodo>
      <TodosList list = {todos} removeItem={removeitem} ></TodosList>
    </View>
  );
}

