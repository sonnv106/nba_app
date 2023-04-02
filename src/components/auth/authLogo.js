import {View, Text, Image} from 'react-native';
import React from 'react';

const authLogo = () => {
  return (
    <View>
      <Image
        source={require('../../assets/images/nba_login_logo.png')}
        style={{width: 170, height: 150,}}
        resizeMode="center"
      />
    </View>
  );
};

export default authLogo;
