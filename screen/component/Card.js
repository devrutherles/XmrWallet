import React, { useState } from 'react';
import { Animated, ScrollView, Image, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, Linking } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import ListCripto from '../component/ListCripto';
import * as Clipboard from 'expo-clipboard';
import { useNavigation } from '@react-navigation/native';
import SvgAtlas from './../component/Logosvg';


import {
    View, Text, Button, Colors,
    Typography, Card, KeyboardAwareFlatList, Assets, Avatar, Chip, TabBar, Toast, Fader
} from 'react-native-ui-lib';
const copy = require('../../assets/icon/copy.png');
const send = require('../../assets/icon/send.png')
const exchange = require('../../assets/icon/exchange.png')
const card = require('../../assets/icon/card.png')
const ButtonSpace = 20;

const atlas = require('../../assets/icon/atlaslogo.png')
const solana = require('../../assets/icon/solana.png')
const ray = require('../../assets/icon/ray.png')


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
        <View  >


            <View >
                <ScrollView horizontal={true}>

                    <View row flex center marginT-50 style={{ marginBottom: 50, alignSelf: 'center', padding: 1, width: '80%' }}>

                        <Card enableShadow={false}  marginR-5 backgroundColor={'#18171f'} >
                            <Card.Section
                                backgroundColor={'#18171f'}
                                padding-10
                                height={60}
                                content={[
                                    { text: '0 USD', text60: true, white: true },
                                ]}
                                contentStyle={{ alignItems: 'center' }}

                            />
                            <View marginT-40>
                                <Image style={{ width: 50, height: 50, alignSelf: 'center' }} source={atlas}></Image>
                            </View>

                            <Card.Section marginT-10
                                backgroundColor={'#18171f'}
                                padding-10

                                contentStyle={{ alignItems: 'center' }}

                            />
                            <Button onPress={copyToClipboard}
                                borderRadius={4} iconStyle={{ width: 15, height: 15 }} size={'small'} label={'transfer currency'} iconSource={copy} ></Button>

                        </Card>
















                        <Card enableShadow={false} marginR-5 backgroundColor={'#18171f'} >

                            <Card.Section
                                backgroundColor={'#18171f'}
                                padding-10
                                height={60}
                                content={[
                                    { text: '0 USD', text60: true, white: true },
                                ]}
                                contentStyle={{ alignItems: 'center' }}

                            />
                            <View marginT-40>
                                <Image style={{ width: 50, height: 50, alignSelf: 'center' }} source={solana}></Image>

                            </View>

                            <Card.Section marginT-10
                                backgroundColor={'#18171f'}
                                padding-10


                                contentStyle={{ alignItems: 'center' }}

                            />
                            <Button onPress={copyToClipboard}
                                borderRadius={4} iconStyle={{ width: 15, height: 15 }} size={'small'} label={'transfer currency'} iconSource={copy} ></Button>


                        </Card>













                        <Card enableShadow={false} backgroundColor={'#18171f'} >

                            <Card.Section
                                backgroundColor={'#18171f'}
                                padding-10
                                height={60}
                                content={[
                                    { text: '0 USD', text60: true, white: true },
                                ]}
                                contentStyle={{ alignItems: 'center' }}

                            />
                            <View marginT-40>
                                <Image style={{ width: 50, height: 50, alignSelf: 'center' }} source={ray}></Image>

                            </View>

                            <Card.Section marginT-10
                                backgroundColor={'#18171f'}
                                padding-10


                                contentStyle={{ alignItems: 'center' }}

                            />
                            <Button onPress={copyToClipboard} borderRadius={4} iconStyle={{ width: 15, height: 15 }} size={'small'} label={'transfer currency'} iconSource={copy} ></Button>


                        </Card>
                    </View>





                </ScrollView>






            </View  >



        </View>
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

