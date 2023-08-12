import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const MenuItems = () => {
    const MenuItemsToDisplay = [  'Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
]

    const MenuStyle = StyleSheet.create({
        scrollStyle: {
            paddingHorizontal:40,
            paddingVertical:40,
            backgroundColor:'black',
        },
        title:{
            color:'white',
            fontSize:40,
            flexWrap:'wrap'
        },
        innerTextStyle:{
            color:'#F4CE14',
            fontSize:36
        }
    })

  return (
    <View style={{flex:0.75}}>
        <ScrollView 
        indicatorStyle={'white'}
        style={MenuStyle.scrollStyle}>
            <Text style={MenuStyle.title}>Menu Items</Text>
            <Text style={MenuStyle.innerTextStyle}>{MenuItemsToDisplay[0]}</Text>
        </ScrollView>
    </View>
  )
}

export default MenuItems