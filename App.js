import { StyleSheet, Text, View } from 'react-native';
import LittleLemmonHeader from './components/LittleLemmonHeader';
import LittleLemmonFooter from './components/LittleLemmonFooter';
import UserFeedbackForm from './components/UserFeedbackForm';

export default function App() {
  return (
    
    <View style={{flex:1,backgroundColor: '#495E57'}}>
      <LittleLemmonHeader></LittleLemmonHeader>
      {/* <LittleLemmonWlcm></LittleLemmonWlcm>
      <View style={{bottom:-200}}>
      <LittleLemmonFooter></LittleLemmonFooter>
      </View> */}
      {/* <MenuItems></MenuItems> */}
      {/* <MenuWithFlatList></MenuWithFlatList> */}
      {/* <FlatlistPractice></FlatlistPractice> */}
      {/* <SectionListPractice></SectionListPractice> */}
      <UserFeedbackForm></UserFeedbackForm>
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
