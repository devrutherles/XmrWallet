import React from 'react';
import { View } from 'react-native';
import { Image } from 'react-native';
// import { Container } from './styles';

const logo = () => {
  return <Image style={{width:80,height:80,borderRadius:50}} source={{uri:'https://i.ibb.co/wNM8Znt/logo-svg-xmr.png'}}></Image>;
}

export default logo;