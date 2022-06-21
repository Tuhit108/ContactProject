import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import GroupImg from '../assets/img/group.png';
import ChildImg from '../assets/img/childimg.png';
import LoadImg from '../assets/img/loading.png';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Image source={GroupImg} style={styles.group63img} />
        <Image source={ChildImg} style={styles.childimg} />
      </View>
      <View style={styles.box2}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.appname}>Base contact</Text>
          <Text style={styles.appdescription}>Giải pháp quản lý công việc</Text>
          <Text style={styles.appdescription}>
            & dự án toàn diện cho doanh nghiệp 4.0
          </Text>
        </View>
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={LoadImg} style={styles.loadimg} />
        </View>
        <View style={{flex: 2,alignItems: 'center',width:'100%'}}>
          <Text style={styles.loginnoti}>Bạn chưa đăng nhập</Text>
          <TouchableOpacity
            style={{width: '80%'}}
            onPress={() => {
              navigation.navigate('DefaultScreen');
            }}>
            <View style={styles.loginbtn}>
              <Text
                style={{
                  color: '#FFFFFF',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}>
                ĐĂNG NHẬP BẰNG BASEACCOUT
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: '80%'}}
            onPress={() => {
              navigation.navigate('DefaultScreen');
            }}>
            <View style={styles.defaultbtn}>
              <Text
                style={{
                  color: '#F2A54A',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}>
                ĐĂNG NHẬP THỦ CÔNG
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    fontFamily: 'Roboto',
    flex: 1,
  },
  box1: {
    flex: 4,
  },
  box2: {
    flex: 5,
    alignItems: 'center',
  },
  childimg: {
    bottom: -60,
    width: 200,
    height: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  group63img: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
  },
  appname: {
    color: '#F2A54A',
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 35,
  },
  appdescription: {
    color: '#333333',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 17,
  },
  loadimg: {
    width: 32,
    height: 32,
    marginTop: 55,
    marginBottom: 55,
  },
  loginnoti: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    fontStyle: 'italic',
    marginBottom: 20,
  },
  loginbtn: {
    width: '100%',
    height: 48,
    backgroundColor: '#F2A54A',
    fontSize: 15,
    fontWeight: '500',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 10,
  },
  defaultbtn: {
    width: '100%',
    height: 48,
    backgroundColor: '#FFFFFF',
    fontSize: 15,
    fontWeight: '500',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#F2A54A',
  },
});

export default LoginScreen;
