import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const PressableButton = () => {

    const [showMenu,setShowMenu] = useState(false)

  return (
    <View>
        <Text>Welcome to little Lemmon</Text>
        <Pressable
        style={styles.button}
        onPress={()=>setShowMenu(!showMenu)}
        >
            <Text>{showMenu ? 'View Menu' : 'Home'}</Text>
            
        </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
    button:{
        backgroundColor: '#03A9F4',
        height:50,
        width:100,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        
    }
})
export default PressableButton