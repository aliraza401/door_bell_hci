import 'react-native-gesture-handler';

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


// import screen
import MainScreen from "./app/screens/MainScreen";
import LoginSignupScreen from "./app/screens/LoginSignupScreen"
import TermsScreen from "./app/screens/TermsScreen"
import SignIn from "./app/screens/SignIn"
import SignUp from "./app/screens/SignUp"
import Setting from "./app/screens/Setting"
import TrustedPeople from "./app/screens/TrustedPeople"
import Notification from "./app/screens/Notification"
import DoNotDisturb from "./app/screens/DoNotDisturb"

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Loginsignup" component={LoginSignupScreen} />
        <Stack.Screen name="Signin" component={SignIn} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Settings" component={Setting} />
        <Stack.Screen name="Trusted People" component={TrustedPeople} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Do Not Disturb" component={DoNotDisturb} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

// {/* <MainScreen /> */}
// <LoginSignupScreen />
// <TermsScreen />
// <SignIn />
// <SignUp />
// <Setting />
// <TrestedPeople />
// <Notification />
// <DoNotDisturb />

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
