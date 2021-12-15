import React from 'react'
import {View,Image} from 'react-native'
const logo = require('../../assets/images/atlas.svg')

export default function Logo(){

    return(
        <View>    
  
         <Image  source={logo} ></Image>
  
        </View>
    );

}