import React, { useState } from 'react';
import {
  Animated,
  ScrollView,
  Image,
  StyleSheet,

} from 'react-native';
import * as Clipboard from 'expo-clipboard';
import CardLoja from '../screen/component/CardLoja'



import {
  View,
  Text,
  Button,

} from 'react-native-ui-lib';
const atlaspng = require('../assets/icon/atlaspng.png')
const grafico = require('../assets/icon/grafico.png')


function Home({ navigation }) {
  state = {};
  toggle = false;
  animatedValue = new Animated.Value(0);

  animate = () => {
    this.toggle = !this.toggle;''
    Animated.timing(this.animatedValue, {
      toValue: Number(this.toggle),
      duration: 300,
      useNativeDriver: true
    }).start();
  };

  function copyToClipboardRonin() {
    Clipboard.setString('2vHjvtts24GshVWCe7gzGxXGFDfQK9EtXnBLKkT7Qaim');
    alert('key copied successfully');
  };

  function copyToClipboardSolflare() {
    Clipboard.setString('HSHTabqLvweVDPEJzrAaLFmQwWV646Aj6sy4fCxJ5SNT');
    alert('key copied successfully');
  };




  return (
    <ScrollView>

   <View flex style={styles.container} >

     

      <View style={styles.containerCard}>

        <CardLoja />

      </View>

      </View>
    </ScrollView>
    

  );
}


export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECF0F1',
    alignSelf: 'center',
    width:'100%'

  },

  containerCard: {
    alignSelf: 'center'

  },

  logo: {
    width: 66,
    height: 58
  },


});
