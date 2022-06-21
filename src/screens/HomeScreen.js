import React from 'react';
import {StyleSheet, View, Text, Image, SafeAreaView} from 'react-native';
import HistoryTab from '../component/HistoryTab';
import ContactTab from '../component/ContactTab';
import HtrIcon from '../assets/img/clock.png';
import CtIcon from '../assets/img/contact.png';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveBackgroundColor: '#f7bb74',
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#F2A54A',
            height: '10%',
          },
        }}
        initialRouteName='History'>
        
        <Tab.Screen
          name="Contact"
          component={ContactTab}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  paddingTop: 30,
                  paddingBottom: 30,
                }}>
                <Image source={CtIcon} styles={{}} />
                <Text style={{fontSize: 10, color: '#FFFFFF'}}> Danh bạ</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryTab}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  paddingTop: 30,
                  paddingBottom: 30,
                }}>
                <Image source={HtrIcon} styles={{}} />
                <Text style={{fontSize: 10, color: '#FFFFFF'}}> Gần đây</Text>
              </View>
            ),
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
