import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LittleLemmonHeader from './components/LittleLemmonHeader';
import LittleLemmonFooter from './components/LittleLemmonFooter';
import LittleLemmonWlcm from './components/LittleLemmonWlcm';
import MenuItems from './components/MenuItems';
import MenuWithFlatList from './components/MenuWithFlatList';
import FlatlistPractice from './components/FlatlistPractice';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text style={{fontSize:20}}>Hi,Hello World</Text>
    //   <StatusBar style="auto" />
    // </View>
    <View style={{flex:1,backgroundColor: '#495E57'}}>
      <LittleLemmonHeader></LittleLemmonHeader>
      {/* <LittleLemmonWlcm></LittleLemmonWlcm>
      <View style={{bottom:-200}}>
      <LittleLemmonFooter></LittleLemmonFooter>
      </View> */}
      {/* <MenuItems></MenuItems> */}
      {/* <MenuWithFlatList></MenuWithFlatList> */}
      <FlatlistPractice></FlatlistPractice>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
