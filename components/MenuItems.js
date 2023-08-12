import React from 'react'
import { ScrollView, Text, View } from 'react-native'

const MenuItems = () => {
    const MenuItemsToDisplay = [  'Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
]
  return (
    <View style={{flex:0.75}}>
        <ScrollView 
        indicatorStyle={'white'}
        style={{paddingHorizontal:40,paddingVertical:40,backgroundColor:'black'}}>
            <Text style={{color:'white',fontSize:40,flexWrap:'wrap'}}>Menu Items</Text>
            <Text style={{color:'#F4CE14',fontSize:36}}>{MenuItemsToDisplay[0]}</Text>
        </ScrollView>
    </View>
  )
}

export default MenuItems