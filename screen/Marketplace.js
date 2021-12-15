import React from 'react';
import { View,StyleSheet, ScrollView } from 'react-native';
import Cardloja from '../screen/component/CardLoja'
import  SvgAtlas  from  '../screen/component/Logosvg'
import {
  Text, Button, Colors,
  Card, Typography
} from 'react-native-ui-lib';
const screen = () => {
  return ( 

  
  <View style={styles.container}>
        <ScrollView>
        <View  style={{ alignSelf: 'center', alignItems: 'center', marginTop: 40 }}>
              <SvgAtlas />
              
              
              <Button borderRadius={7} outlineColor={'#fff'} outline={true} style={{marginTop:30}} label={'Inventory $ 0'}></Button>

              
              </View>


<View style={styles.cardContainer} ><Cardloja/></View>

</ScrollView>


  </View>
  );
}

export default screen;


const styles = StyleSheet.create({

container : {
  backgroundColor:'#222129',
  width:'100%',

  
},

cardContainer:{
  marginTop:40,
  width:'100%',
  

}

})