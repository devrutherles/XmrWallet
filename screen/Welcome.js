import React, { useEffect } from 'react';
import { Animated, ScrollView, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image } from "react-native-expo-image-cache";
import { BlurView } from 'expo-blur';
import Logo from './component/Svgatlas'
import SvgAtlas from './component/Logosvg';
import {
  View, Text, Button, Colors,
  Card,Typography
} from 'react-native-ui-lib';
import { NavigationContainer } from '@react-navigation/native';
const { width, height } = Dimensions.get("window");

const atlas = require('../assets/icon/atlaslogo.png')
const solana = require('../assets/icon/solana.png')
const ray = require('../assets/icon/ray.png')




const preview = { uri: "https://mlgbzz6iaqdd.i.optimole.com/XzaT3g-ka1kldGy/w:auto/h:auto/q:74/https://djcleanto.com.br/wp-content/uploads/2014/01/black-background-hd-images.jpg" };
const uri = 'https://cdn.dribbble.com/users/2643208/screenshots/6803444/solar_system_2d.gif';
const discord = require('../assets/images/discord.png')


const App = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BlurView intensity={90}>

          <Image style={{
            height: '70%', width: '100%'
          }} {...{ preview, uri }} />
        </BlurView>

      </View>

      <View style={styles.circle} >
        <View flex-1>

          <View flex-1 style={{ alignSelf: 'center', alignItems: 'center', marginTop: 40 }}>
            <SvgAtlas /></View>

          <View marginT-375  style={{position:'absolute' ,alignSelf:'center',}}  width={'98%'}>
        
        
          <Card backgroundColor={'#18171f'} >
         
          <Card.Section
          backgroundColor={'#18171f'}
          padding-10
          height={60}
          content={[
            {text: 'CONNECT SUPPORTED WALLET', text70: true, white: true},
          ]}
          contentStyle={{alignItems: 'center'}}
          
        />
          <View marginT-40>
          <Button onPress={()=> navigation.navigate('ImportWallet')} iconStyle={{width:40,height:40}} outline={true} outlineColor={'#fff'} iconSource={atlas} borderRadius={4} style={{width:'90%',alignSelf:'center',marginBottom:10,}}  label={' Atlas (ATLAS)'}></Button>
          <Button onPress={()=> navigation.navigate('ImportWallet')} iconStyle={{width:40,height:40}} outline={true} outlineColor={'#fff'} iconSource={solana} borderRadius={4} style={{width:'90%',alignSelf:'center',marginBottom:10,}}  label={'SOLANA (SOL)'}></Button>
          <Button onPress={()=> navigation.navigate('ImportWallet')}iconStyle={{width:40,height:40}} outline={true} outlineColor={'#fff'} iconSource={ray} borderRadius={4} style={{width:'90%',alignSelf:'center',marginBottom:10,}}  label={'RADYUM (RAY)'}></Button>

          </View>
       
          <Card.Section marginT-10
          backgroundColor={'#18171f'}
          padding-10
          
          content={[
            {text: 'CONNECT SUPPORTED WALLET GET HELP CONNECTING YOUR WALLET CHAT WITH US ON DISCORD', text100: true, white: true, center:true,},
          ]}
          contentStyle={{alignItems: 'center'}}
          
        />
       
        
      </Card>



          </View>
         
          </View>
        </View>

    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    height: '100%',
    position: 'relative',
    top: 0,
    left: 0,
  },
  circle: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',

    flex: 1,

  },
});