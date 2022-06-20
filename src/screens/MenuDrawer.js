import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Avartar from '../assets/img/avartar.png';
import NewIc from '../assets/img/new.png';
import PlayIc from '../assets/img/Play.png';
import ContactIc from '../assets/img/contactic.png';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {color} from 'react-native-reanimated';

const collections = [
  {id: 1, name: 'All'},
  {id: 2, name: 'General'},
  {id: 3, name: 'Investors'},
  {id: 4, name: 'Lead'},
  {id: 5, name: 'VIP'},
];
const MenuDrawer = props => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerheader}>
          <View style={{flexDirection: 'row', position: 'absolute', bottom: 0}}>
            <Image
              source={Avartar}
              style={{marginLeft: 20, marginRight: 12, marginBottom: 12}}
            />
            <View style={{flexDirection: 'column'}}>
              <Text style={{fontSize: 16, fontWeight: '500', color: '#FFFFFF'}}>
                {' '}
                Nguyễn Tiến Nam
              </Text>
              <Text style={{fontSize: 12, fontWeight: '400', color: '#FFFFFF'}}>
                {' '}
                Admin
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.drawercontent}>
          <View
            style={{
              height: 60,
              justifyContent: 'center',
              backgroundColor: '#FFFFFF',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image source={NewIc} style={styles.itemicon} />
              <Text style={styles.itemname}> New collection</Text>
            </View>
          </View>
          <View
            style={{
              height: 40,
              justifyContent: 'center',
              backgroundColor: 'rgba(242, 165, 74, 0.1)',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={PlayIc}
                style={{marginLeft: 16, marginRight: 16, top: 8}}
              />
              <Text style={{fontSize: 14, fontWeight: '700', color: '#333333'}}>
                COLLECTIONS
              </Text>
              <Text style={{position: 'absolute', fontSize: 13, fontWeight: '500', color: '#F2A54A',right: 12}}>
                edit
              </Text>

            </View>
          </View>
          <View>
            {collections.map(({id, name}) => (
              <View key={id} style={{justifyContent: 'center', height: 40}}>
                <View style={{flexDirection: 'row'}}>
                  <Image source={ContactIc} style={styles.itemicon} />
                  <Text style={styles.itemname}> {name} </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerheader: {
    backgroundColor: '#F2A54A',
    height: 85,
  },
  drawercontent: {},
  itemicon: {
    marginLeft: 20,
    marginRight: 20,
  },
  itemname: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333333',
  },
});

export default MenuDrawer;
