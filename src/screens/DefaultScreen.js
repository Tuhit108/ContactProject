import React from 'react';
import { StyleSheet , View, Text,SafeAreaView} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './HomeScreen';
import MenuDrawer from './MenuDrawer';

const Drawer = createDrawerNavigator();
const DefaultScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    <Drawer.Navigator initialRouteName="Home" screenOptions={{
      headerShown: false,
     }}  useLegacyImplementation
     drawerContent={(props) => <MenuDrawer {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
      </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  
});

export default DefaultScreen;