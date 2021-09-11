import React from 'react';
import Checkbox from 'expo-checkbox';

import { Text,View, FlatList ,StyleSheet  } from 'react-native';
import  { useState } from 'react';


const TodosList = ({list , removeItem } )=>{

   
    
    

    return(
        <FlatList data={list}
        renderItem={({item })=>{
            if(item.title != ''){
            return(
                <View style={styles.item}>
                   <Text style={styles.item}>Title:{item.title}</Text>
                   <Checkbox value={item.done} style={styles.done} onChange={
                       ()=>{
                        removeItem(item.title);
                       }
                   }/>
                </View>
            )
                }
                else
                {
                    return(<View></View>)
                }
        }}
        keyExtractor={(item)=>item.id}
        ListHeaderComponent={()=>{
            return(
                <Text style={styles.header}>
                    List
                </Text>
            )
        }}
        ListFooterComponent={()=>{
            return(
            <Text style={styles.header}>
                End of todos
            </Text>
            )
        }}
        ListEmptyComponent={()=>{
            return(
                <Text>PLZ ADD TODO</Text>
            )
        }}
        ItemSeparatorComponent={
            ()=>{
                return(
                    <View style={{borderWidth:1 , borderColor:'black'}}></View>
                )
            }
        }
        ListHeaderComponentStyle={{display:'flex',alignItems:'center'}}></FlatList>
    )

}


export default TodosList

const styles = StyleSheet.create({
    item:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        margin:5,
        padding:2,
        alignItems:'center',
        backgroundColor:'#E5F0FF',
        color:'#2398AB'
    },
    header:{
          width:'100%',
          textAlign:'center',
          backgroundColor:'black',
          color:'white'
    }
})