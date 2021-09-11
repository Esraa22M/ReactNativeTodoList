import React, { useState } from 'react'
// import {Button ,} from 'native-base'
import { TextInput, TouchableHighlight, View ,Text ,StyleSheet , NativeModules, LayoutAnimation }from 'react-native'
const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);
const AddTodo =({onTodoAdd ,Count})=>{
    let [focous , setFocus]=useState(false)
    let[title,setTitle]=useState()
    const addTodo=()=>{
        let todo = {
            title,
            done:false,
            id:Math.random().toString()
        }
        onTodoAdd(todo)
        console.log(todo)
    }
    return(
        <View>
         <Text style={styles.header}>TODO  {Count} </Text> 
            <View style={styles.addTodoContainer}>
                <TextInput  placeholder="enter title" 
                onChangeText={(txt)=>{
                   setTitle(txt)
                    
                }}
                value={title}
            
               
                style={{
                    ...styles.input,
                    ...( focous? styles.focused : {})
                }}
                onFocus={() => {
                    LayoutAnimation.spring()
                    setFocus(true)
                }}
                onBlur={() => {
                    LayoutAnimation.easeInEaseOut()
                    setFocus(false)
                    
                }}
                
                />
<TouchableHighlight style={styles.addBtn}
                onPress={ ()=>{addTodo()
                setTitle('')}
                }
                >
                    <Text style={styles.addBtnTitle}>
                        Add
                    </Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}
export default AddTodo;

const styles = StyleSheet.create({
    header: {
        padding: 5,
        backgroundColor: 'black',
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    addTodoContainer: {
        display: 'flex',
        flexDirection: 'row',
        margin: 5,
        justifyContent: 'space-between'
    },
    addBtn: {
        backgroundColor: 'grey',
        padding: 10,
        width: '30%',
    },
    addBtnTitle: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    input: {
        marginRight: 2,
        flexGrow:1
    },
    focused: {
        flexGrow: 2,
        borderBottomColor: 'black',
        borderBottomWidth: 2,

    }

})
