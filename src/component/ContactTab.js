import React from 'react';
import { StyleSheet , View, Text} from 'react-native';

const ContactTab = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 50}}>Danh Bạ</Text>
      </View>
    
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

export default ContactTab;
