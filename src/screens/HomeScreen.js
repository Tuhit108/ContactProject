import React from 'react';
import { StyleSheet , View, Text,Image} from 'react-native';
import HistoryTab from '../component/HistoryTab'
import ContactTab from '../component/ContactTab'
import HtrIcon from '../assets/img/clock.png';
import CtIcon from '../assets/img/contact.png';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const HomeScreen = () => {
  return (
    
      <View style={styles.container}>
      <Tab.Navigator 
         screenOptions={{
          headerShown:false,
          tabBarActiveBackgroundColor :'#f7bb74',
          tabBarShowLabel: false,
          tabBarStyle :{
            backgroundColor: '#F2A54A',
            height: 64,
          }
         }}>
        <Tab.Screen name="History" component={HistoryTab} options={{
          tabBarIcon : ({focused}) =>(
            <View style={{alignItems: 'center'}}>
              <Image source={HtrIcon} styles={{}} />
              <Text style={{fontSize:10,color :'#FFFFFF'}}> Gần đây</Text>
            </View>
          )
        }} />
        <Tab.Screen name="Contact" component={ContactTab}  
        options={{
          tabBarIcon : ({focused}) =>(
            <View style={{alignItems: 'center'}}>
              <Image source={CtIcon} styles={{}} />
              <Text style={{fontSize:10,color :'#FFFFFF'}}> Danh bạ</Text>
            </View>
          )
        }}
        />
        </Tab.Navigator>
    </View>
     
    
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});

export default HomeScreen;
