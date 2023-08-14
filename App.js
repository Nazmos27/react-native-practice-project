import { Image, StyleSheet, Text, View } from 'react-native';
import LittleLemmonHeader from './components/LittleLemmonHeader';
import LittleLemmonWlcm from './components/LittleLemmonWlcm'
import SectionListPractice from './components/SectionListPractice';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

const LogoTitle = () => (
  <Image
  style={{resizeMode:'contain',height:50,width:200,paddingHorizontal:150}} 
  source={require("./Img/Lime_(transportation_company)_logo.svg.png")}></Image>
)

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerStyle: { backgroundColor: 'skyblue' } }}>
        <Stack.Screen
          name={"Welcome"}
          options={
            {
              title: "Home",
              headerTitle: (props) => <LogoTitle {...props}></LogoTitle>
            }}
          component={LittleLemmonWlcm}>

          </Stack.Screen>
        <Stack.Screen name="Menu" component={SectionListPractice}></Stack.Screen>
      </Stack.Navigator>

    </NavigationContainer>
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
