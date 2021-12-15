import React from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native';
import { Image } from "react-native-expo-image-cache";
import { Button } from 'react-native-ui-lib';
import SvgAtlas from './component/Logosvg';
import { saveLocal} from '../Consts/functions'
import * as Clipboard from 'expo-clipboard';


// import { Container } from './styles';

const preview = { uri: "https://mlgbzz6iaqdd.i.optimole.com/XzaT3g-ka1kldGy/w:auto/h:auto/q:74/https://djcleanto.com.br/wp-content/uploads/2014/01/black-background-hd-images.jpg" };
const uri = 'https://cdn.dribbble.com/users/2643208/screenshots/8212153/media/a451385c0dec6e6d3e849def639807e1.gif';

const phanton = require('../assets/icon/phanton.png')
const colar = require('../assets/icon/past.png')
const copi = require('../assets/icon/copi.png')

const screen = ({ navigation }) => {
  const [text, onChangeText] = React.useState("innocent public geek maverick sixteen psychic oaks upwards nobody phrases blender aloof saga height nurse foamy vary dodge muffin baptism dejected object king knapsack foamy");
  const [text2, onChangeText2 , setText2] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);




const verifiinput = () => {
if ( text2.length < 2 ) {
  alert('Required key')
  
} else if (text !== text2) {

  alert( 'Please copy the key correctly , key do not match')

} else{
  
  saveLocal(text2);
  navigation.navigate('Home')


}


}

const past = () =>{
  onChangeText2 ('innocent public geek maverick sixteen psychic oaks upwards nobody phrases blender aloof saga height nurse foamy vary dodge muffin baptism dejected object king knapsack foamy')
}


const copyToClipboard = () => {
  Clipboard.setString("innocent public geek maverick sixteen psychic oaks upwards nobody phrases blender aloof saga height nurse foamy vary dodge muffin baptism dejected object king knapsack foamy");
  alert('key copied successfully');
};

  return (
<ScrollView>
    <View style={styles.container}>
      <KeyboardAvoidingView contentContainerStyle={styles.box} behavior="position" enabled>

        <View flex-1 style={{ alignSelf: 'center', alignItems: 'center', marginTop: 40 }}>
          <SvgAtlas />
        </View>



        <Text text50 style={styles.text}  >That was simple. Your Account is ready!</Text>

        <View style={styles.container2}>
          <Text text50 style={styles.text}><Text text50 style={styles.text}><Text text50 style={styles.text}>Private Seed</Text></Text></Text>
          <Text text50 style={styles.text}><Text text50 style={styles.text}><Text text50 style={styles.text}>Your Seed:</Text></Text></Text>
          <View row>
          <TextInput editable={false} onChangeText={onChangeText} style={styles.textinput} multiline={true} value={text}></TextInput>
          <Button onPress={copyToClipboard} backgroundColor={'#fff'} iconStyle={{width:20,height:20}} iconSource={copi}></Button>
          </View>
          <Text text50 style={styles.text}><Text text50 style={styles.text}><Text text50 style={styles.text}>Confirm your Seed:</Text></Text></Text>
         <View>
          <TextInput numberOfLines={5} onChangeText={onChangeText2} style={styles.textinput} value={text2}></TextInput>
          <Button onPress={past} backgroundColor={'#fff'} iconStyle={{width:30,height:30}} iconSource={colar}></Button>
          </View>

          <Button backgroundColor={'#FF6600'} onPress={verifiinput} borderRadius={4} style={{ width: '90%', alignSelf: 'center', marginBottom: 10, marginTop: 25 }}
            label={'I’VE WRITTEN DOWN MY SEED, LOG ME IN'}></Button>





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