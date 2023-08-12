import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'


const MenuItems = [
    { name: 'Hummus', price: '$5.00', id: '1A' },
    { name: 'Moutabal', price: '$5.00', id: '2B' },
    { name: 'Falafel', price: '$7.50', id: '3C' },
    { name: 'Marinated Olives', price: '$5.00', id: '4D' },
    { name: 'Kofta', price: '$5.00', id: '5E' },
    { name: 'Eggplant Salad', price: '$8.50', id: '6F' },
    { name: 'Lentil Burger', price: '$10.00', id: '7G' },
    { name: 'Smoked Salmon', price: '$14.00', id: '8H' },
    { name: 'Kofta Burger', price: '$11.00', id: '9I' },
    { name: 'Turkish Kebab', price: '$15.50', id: '10J' },
    { name: 'Fries', price: '$3.00', id: '11K' },
    { name: 'Buttered Rice', price: '$3.00', id: '12L' },
    { name: 'Bread Sticks', price: '$3.00', id: '13M' },
    { name: 'Pita Pocket', price: '$3.00', id: '14N' },
    { name: 'Lentil Soup', price: '$3.75', id: '15O' },
    { name: 'Greek Salad', price: '$6.00', id: '16Q' },
    { name: 'Rice Pilaf', price: '$4.00', id: '17R' },
    { name: 'Baklava', price: '$3.00', id: '18S' },
    { name: 'Tartufo', price: '$3.00', id: '19T' },
    { name: 'Tiramisu', price: '$5.00', id: '20U' },
    { name: 'Panna Cotta', price: '$5.00', id: '21V' },
]

const Item = ({ name, price }) => (
    <View >
        <View style={menuStyles.menuContainer}>
            <Text style={{color:'white'}}>{name}</Text>
            <Text style={{color:'white'}}>{price}</Text>
        </View>
    </View>
)

const FlatlistPractice = () => {

    const renderItem = ({ item }) => <Item name={item.name} price={item.price}></Item>

    return (
        <View style={menuStyles.container}>
            <Text style={menuStyles.title}>Menu Item With Price</Text>
            <FlatList
            
                data={MenuItems}
                renderItem={renderItem}
                keyExtractor={(item => item.id)}
            ></FlatList>
        </View>
    )
}

const menuStyles = StyleSheet.create({
    container: {
        flex: 0.75,
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        color: 'white'
    },
    menuContainer: {
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:20,
        

    }
})

export default FlatlistPractice