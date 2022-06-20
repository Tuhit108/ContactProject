import React from 'react';
import { StyleSheet , View, Text,Image,TouchableOpacity} from 'react-native';
import MoreIc from '../assets/img/more.png';
import CamIc from '../assets/img/camera.png';
const HistoryTab = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {
            navigation.openDrawer();
        }}>
      <Image source={MoreIc} style={{ marginLeft: 10,}} />
      </TouchableOpacity >
        <Text style={{left:0,fontSize:24, fontWeight: '500',color: '#333333'}}>Lịch Sử</Text>
        <Image source={CamIc} style={{marginRight: 10,}} />
      </View>
      <Text style={{fontSize: 50, flex: 11,color: '#333333'}}>Lịch Sử</Text>
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
  height :'100%',
  }
});

export default HistoryTab;
