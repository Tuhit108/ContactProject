/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';

 import {StyleSheet, View} from 'react-native';
 import {NavigationContainer} from '@react-navigation/native';
 import {createNativeStackNavigator} from '@react-navigation/native-stack';
 import { createDrawerNavigator } from '@react-navigation/drawer';
 import LoginScreen from './src/screens/LoginScreen';
 import DefaultScreen from './src/screens/DefaultScreen';
 import 'react-native-gesture-handler';
 
 const Stack = createNativeStackNavigator();
 
 const YourApp = () => {
   return (
     <NavigationContainer>
       <Stack.Navigator screenOptions={{
        headerShown: false,
       }}
       initialRouteName='Login'
       >
       <Stack.Screen  name="Login" component={LoginScreen} />
       <Stack.Screen  name="DefaultScreen" component={DefaultScreen} />
       </Stack.Navigator>
       


     </NavigationContainer>
   );
 };
 const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
 });
 
 export default YourApp;
 