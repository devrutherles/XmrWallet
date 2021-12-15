import React, { useState } from 'react';
import { Animated, ScrollView, Image, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, Linking } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import ListCripto from './ListCripto';
import * as Clipboard from 'expo-clipboard';
import { useNavigation } from '@react-navigation/native';
import SvgAtlas from './Logosvg';


import {
    View, Text, Button, Colors,
    Typography, Card, KeyboardAwareFlatList, Assets, Avatar, Chip, TabBar, Toast, Fader
} from 'react-native-ui-lib';
const copy = require('../../assets/icon/copy.png');
const send = require('../../assets/icon/send.png')
const exchange = require('../../assets/icon/exchange.png')
const card = require('../../assets/icon/card.png')
const ButtonSpace = 20;

const nave1 = require('../../assets/images/1.jpeg')
const nave2 = require('../../assets/images/2.jpeg')
const nave3 = require('../../assets/images/3.jpeg')
const nave4 = require('../../assets/images/4.jpeg')
const nave5 = require('../../assets/images/5.jpeg')
const nave6 = require('../../assets/images/6.jpeg')


function CardCentral() {


    const [copiedText, setCopiedText] = React.useState('');

    const copyToClipboard = () => {
        Clipboard.setString('ronin:e61bdb6ce91e91fefe19a7db315bd1887ddf50b9');
        alert('key copied successfully');
    };





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

    const navigation = useNavigation();

    return (
        <ScrollView>
        <View  >


            <View center >
                <ScrollView horizontal={true}>

                    <View row flex center style={{ marginBottom: 50, alignSelf: 'center', padding: 5, width: '100%' }}>

                        <Card width={190} enableShadow={false} padding-5
                            marginR-10 backgroundColor={'#18171f'} >
                            <Card.Section
                                backgroundColor={'#18171f'}
                                padding-5
                                height={35}
                                content={[
                                    { text: '0 USD', text60: true, white: true },
                                ]}
                                contentStyle={{ alignItems: 'center' }} />
                            <Image style={{ width: '90%', height: '60%', borderRadius: 4, alignSelf: 'center', marginBottom: 10 }} source={nave1}></Image>

                            <Card.Section
                                backgroundColor={'#18171f'}
                                contentStyle={{ alignItems: 'center' }} />

                            <Button onPress={copyToClipboard}
                                borderRadius={4} iconStyle={{ width: 15, height: 15 }} size={'small'} label={'transfer currency'}
                                iconSource={copy} ></Button> </Card>




                      
                   
                   
                   
                   
                   
                    </View>
                    </ScrollView>


                    <ScrollView horizontal={true}>

<View row flex center style={{ marginBottom: 50, alignSelf: 'center', padding: 5, width: '100%' }}>

    <Card width={190} height={90} enableShadow={false} padding-5
        marginR-10 backgroundColor={'#18171f'} >
        <Card.Section
            backgroundColor={'#18171f'}
            padding-5
            height={35}
            content={[
                { text: '0 USD', text60: true, white: true },
            ]}
            contentStyle={{ alignItems: 'center' }} />
        <Image style={{ width: '90%', height: '60%', borderRadius: 4, alignSelf: 'center', marginBottom: 10 }} source={nave1}></Image>

        <Card.Section
            backgroundColor={'#18171f'}
            contentStyle={{ alignItems: 'center' }} />

        <Button onPress={copyToClipboard}
            borderRadius={4} iconStyle={{ width: 15, height: 15 }} size={'small'} label={'transfer currency'}
            iconSource={copy} ></Button> </Card>




  





</View>
</ScrollView>



            </View  >

               







        </View>

        </ScrollView>
    );
}


export default CardCentral;


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

    rlogo: {
        width: 50,
        height: 50,
        marginLeft: 40,
        marginTop: 15

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ECF0F1'
    },
    buttonsContainer: {
        padding: 10
    },
    textStyle: {
        textAlign: 'center',
        marginBottom: 8
    }
});

