import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Animated, ScrollView, Image, StyleSheet, KeyboardAvoidingView, TextInput, Alert
} from 'react-native';
import { color } from 'react-native-reanimated';
import {
  View, Text, Button, Colors,
  Typography, TextField, ChipsInput
} from 'react-native-ui-lib';
import {storeData} from '../assets/data/storage'


const ButtonSpace = 20;

function NewWallet({ navigation }) {
  state = {};
  toggle = false;
  animatedValue = new Animated.Value(0);
  const [password, setPassword] = useState('');
  const [storage, setStorage] = useState('');

  const [repetpassword, setRepetpassword] = useState('');


  animate = () => {
    this.toggle = !this.toggle;
    Animated.timing(this.animatedValue, {
      toValue: Number(this.toggle),
      duration: 300,
      useNativeDriver: true
    }).start();
  };


  const saveData = async () => {
    try {
      await AsyncStorage.setItem('@CREATE', password)
     // alert('Data successfully saved')
    } catch (e) {
     // alert('Failed to save the data to the storage')
    }
  }

  const handlePress = () => {
   if (password !== repetpassword) {

      alert('PASSWORDS DO NOT MATCH')


    } else if (!password || !repetpassword) {

      alert('PASSWORD IS REQUIRED')


    } else {

      saveData();
    

     navigation.navigate('Home');
    }
  };

  function renderDivider() {
    return <View height={2} bg-grey60 />;
  }

   


  
 

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" enabled>

        <View flex center marginT-100 >
        <Text marginT-60 marginB-5 center={true} text50>Ronin Wallet</Text>



          <Text center={true} text40 marginB-50 marginT-80>
            Create a New Wallet
          </Text>
          <Text center={true} text85 marginB-5 marginT-3>
            ENTER PASSWORD          </Text>


          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="ENTER PASSWORD AT LEAST 8 CHARACTERS'"
            keyboardType="string"
            onChangeText={(password) => setPassword(password)}

          />

          <Text center={true} text85 marginB-5 marginT-3>
            CONFIRM PASSWORD
          </Text>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="CONFIRM PASSWORD"
            keyboardType="string"
            onChangeText={(repetpassword) => setRepetpassword(repetpassword)}

          />





          <Button marginT-20
            label={'Create wallet'}
            style={{ marginBottom: ButtonSpace, backgroundColor: '#1c94f4' }}
            onPress={handlePress}

          />




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
    width: 170,
    height: 60,
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
});
