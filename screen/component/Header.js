import React, { useState } from 'react';
import {
  Animated,
  ScrollView,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  StatusBar

} from 'react-native';
const nave = require('../../assets/icon/nave.png')
import { useNavigation } from '@react-navigation/native';

import {
  View,
  Button,
  Colors,
  Avatar,
  Chip,

} from 'react-native-ui-lib';
import { Header } from 'react-native/Libraries/NewAppScreen';
const copy = require('../../assets/icon/copy.png');
const send = require('../../assets/icon/send.png')
const exchange = require('../../assets/icon/exchange.png')
const card = require('../../assets/icon/card.png')
const ButtonSpace = 20;

function TopBar() {
  state = {};
  toggle = false;
  animatedValue = new Animated.Value(0);

  animate = () => {
    this.toggle = !this.toggle;
    Animated.timing(this.animatedValue, {
      toValue: Number(this.toggle),
      duration: 300,
      useNativeDriver: true
    }).start();
  };

  const navigation = useNavigation();

  


  return (


    <View
      row
      style={{
        marginTop: 10,
        marginBottom: 20
      }}>

      <Chip
        labelStyle={{
          borderColor: 'gray'
        }}
        containerStyle={{
          borderColor: '#f7f9fc',
          borderBottomRightRadius: 3
        }}
        height={8}
        width={130}
        badgeProps={{
          label: 'A',
          backgroundColor: 'gray',
          color: '#1c94f4'
          
        }}
        borderRadius={4}
        label={'Star Atlas'}
        backgroundColor={'#f7f9fc'} />

<Chip
onPress={()=>navigation.navigate('Marketplace')}
        labelStyle={{
          borderColor: 'gray'
        }}
        containerStyle={{
          borderColor: '#f7f9fc',
          borderBottomRightRadius: 3
        }}
        height={6}
        width={130}
        marginL-10
        
        borderRadius={4}
        iconSource={nave}
        iconStyle={{width:20,height:20}}
        label={'Marketplace'}
        backgroundColor={'#f7f9fc'} />


       



      <Avatar
        label={'SA'}
        badgeProps={{ backgroundColor: '#46d169' }}
        animate
        size={35}
        ribbonStyle={{ backgroundColor: Colors.purple30 }}

        containerStyle={{
          marginLeft: 80,
          marginBottom: 2


        }}
        backgroundColor={'#8dc9f9'}


      />



    </View>






  );
}


export default TopBar;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50
  },
  tinyLogo: {
    width: 170,
    height: 60
  },
  logo: {
    width: 66,
    height: 58
  },
  termos: {
    padding: 10
  },

  rlogo: {
    width: 50,
    height: 50,
    marginLeft: 40,
    marginTop: 15

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1'
  },
  buttonsContainer: {
    padding: 10
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8
  }
});
