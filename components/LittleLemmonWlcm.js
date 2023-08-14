import React from 'react'
import { Button, Pressable, Text, View } from 'react-native'

const LittleLemmonWlcm = ({navigation}) => {
  return (
    <View style={{padding:40,flex:0.5,backgroundColor:'green'}}>
        <Text style={{textAlign:'center',color:'white',fontSize:30}}>Welcome to little Lemon</Text>
        <Text style={{color:'white',textAlign:'center',fontSize:20,marginTop:40,padding:20}}>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
        <Pressable>
          <Button onPress={() => navigation.navigate("Menu")} title='View Menu'></Button>
        </Pressable>
    </View>
  )
}

export default LittleLemmonWlcm