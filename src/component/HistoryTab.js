import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import MoreIc from '../assets/img/more.png';
import CamIc from '../assets/img/camera.png';
import DetailIc from '../assets/img/detailic.png';
import PhoneIc from '../assets/img/phone.png';
import {back} from 'react-native/Libraries/Animated/Easing';
const contacts = [
  {id: 1, name: 'Nguyễn Tiến Nam', phone:'0327942405', time:'Hôm nay'},
  {id: 2, name: 'Vũ Mạnh Linh', phone:'0327942405', time:'Hôm nay'},
  {id: 3, name: 'Trần Thái Hà', phone:'0327942405', time:'Hôm nay'},
  {id: 4, name: 'Lê Ngọc Linh', phone:'0327942405', time:'Hôm nay'},
  {id: 5, name: 'Trần Kiều Vân', phone:'0327942405', time:'Hôm nay'},
  {id: 6, name: 'Kiều Vân Anh', phone:'0327942405', time:'Hôm nay'},
  {id: 7, name: 'Thái Thùy Linh', phone:'0327942405', time:'Hôm nay'},
  {id: 8, name: 'Nguyễn Nam Tuấn', phone:'0327942405', time:'Hôm nay'},
  {id: 9, name: 'Bùi Trọng Tùng', phone:'0327942405', time:'Hôm nay'},
];
const HistoryTab = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Image source={MoreIc} style={{marginLeft: 10}} />
        </TouchableOpacity>
        <Text
          style={{left: 0, fontSize: 24, fontWeight: '500', color: '#333333'}}>
          Lịch Sử
        </Text>
        <Image source={CamIc} style={{marginRight: 10}} />
      </View>
      <View style={styles.content}>
      {contacts.map(({id, name,phone, time}) => (
        <View key={id}
          style={{
            flexDirection: 'row',
            width: '100%',
            height: '10%',
            justifyContent: 'space-between',

            borderBottomColor: '#F5F5F5',
            borderBottomWidth: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={PhoneIc} style={{marginLeft: 15, marginRight: 15}} />
            <View style={{}}>
              <Text style={{fontSize: 16, fontWeight: '500', color: '#333333',marginBottom:2}}>
                {name}
              </Text>
              <Text style={{fontSize: 14, fontWeight: '400', color: '#828282',marginTop: 2}}>
                {phone}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 14, fontWeight: '400', color: '#828282'}}>
              {time}
            </Text>
            <Image
              source={DetailIc}
              style={{marginLeft: 15, marginRight: 15}}
            />
          </View>
        </View>
         ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '100%',
    top: 0,
    height: '100%',
  },
  content: {
    flex: 10,
    width: '100%',
  },
});

export default HistoryTab;
