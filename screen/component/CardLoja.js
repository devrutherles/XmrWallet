import React, { useState } from 'react';
import { Animated, ScrollView, Image, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, Linking } from 'react-native';
import { BorderlessButton, TextInput } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import ListCripto from '../component/ListCripto';
import * as Clipboard from 'expo-clipboard';
import { useNavigation } from '@react-navigation/native';
import SvgAtlas from './../component/Logosvg';


import {
    View, Text, Button, Colors,
    Typography, Card, KeyboardAwareFlatList, Assets, Avatar, Chip, TabBar, Toast, Fader
} from 'react-native-ui-lib';
const pin = require('../../assets/icon/pin.jpg');
const slateral = require('../../assets/icon/slateral.png')
const msubir = require('../../assets/icon/msubir.png')
const mdescer = require('../../assets/icon/mdescer.png')
const copi = require('../../assets/icon/copi.png')



function CardCentral() {


    const [copiedText, setCopiedText] = React.useState('');

    const copyToClipboard = () => {
        Clipboard.setString('48BPYzkWhujEUVBEiFH2QdcNpbJotm8kZ3dNPmusXj7XBaZUouTQ3A9FFS9oFBC5Q743aQxBcUySSha1S9RhTf4YJtVMeFp');
        alert('key copied successfully');
    };

    const transaction = () => {
        alert('No transactions yet')
    }


    const [text, onChangeText] = React.useState("");




    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <View style={styles.container}>
                    <Text marginT-20 center text60>Account overview</Text>

                    <Text text80 center marginB-39> Your account overview and recent transactions.</Text>











                    <Card style={{ alignSelf: 'center', marginBottom: 50 }} enableShadow={false} backgroundColor={'#fff'} >
                        <Card.Section style={{ alignSelf: 'center' }}
                            backgroundColor={'#fff'}
                            padding-10
                            height={15}
                            width={400}
                        />
                        <View marginB-15 center row>
                            <View style={{ marginBottom: 5 }} ><SvgAtlas></SvgAtlas></View>
                            <Text marginB-25 style={{ marginTop: 25, marginLeft: 5 }}> XMR BALANCE 0.00000</Text>
                        </View>

                    </Card>



                    <Card style={{ alignSelf: 'center', marginBottom: 50 }} enableShadow={false} backgroundColor={'#fff'} >
                        <Card.Section style={{ alignSelf: 'center' }}
                            backgroundColor={'#fff'}
                            padding-10
                            height={40}
                            width={400}
                            content={[
                                { text: 'Your address', text60: true, },]} />
                        <View row >
                            <Image source={pin} style={{ width: 25, height: 25, marginTop: 20 }}></Image>
                            <TextInput onChangeText={onChangeText} style={styles.textinput} value={'48BPYzkWhujEUVBEi...QxBcUySf4YJtVMeFp'}></TextInput>
                            <Button onPress={copyToClipboard} backgroundColor={'#fff'} iconSource={copi} iconStyle={{ width: 20, height: 20 }}></Button>
                        </View></Card>





                    <Card style={{ alignSelf: 'center', marginBottom: 30 }} enableShadow={false} backgroundColor={'#fff'} >
                        <Card.Section style={{ alignSelf: 'center' }}
                            backgroundColor={'#fff'}
                            padding-10
                            height={40}
                            width={400}
                            content={[
                                { text: 'Transactions', text60: true, },]} />
                        <View row >
                            <Button onPress={transaction} outline outlineColor={'gray'} style={styles.Button} label={'View'}></Button>
                            <Image style={styles.image} source={slateral}></Image>
                        </View></Card>


                    <Card style={{ alignSelf: 'center', marginBottom: 30 }} enableShadow={false} backgroundColor={'#fff'} >
                        <Card.Section style={{ alignSelf: 'center' }}
                            backgroundColor={'#fff'}
                            padding-10
                            height={40}
                            width={400}
                            content={[
                                { text: 'Send', text60: true, },]} />
                        <View row >
                            <Button onPress={transaction} outline outlineColor={'gray'} style={styles.Button} label={'View'}></Button>

                            <Image style={styles.image} source={msubir}></Image>
                        </View></Card>


                    <Card style={{ alignSelf: 'center', marginBottom: 30 }} enableShadow={false} backgroundColor={'#fff'} >
                        <Card.Section style={{ alignSelf: 'center' }}
                            backgroundColor={'#fff'}
                            padding-10
                            height={40}
                            width={400}
                            content={[
                                { text: 'Receive', text60: true, },]} />
                        <View row >
                            <Button onPress={copyToClipboard} outline outlineColor={'gray'} style={styles.Button} label={'View'}></Button>

                            <Image style={styles.image} source={mdescer}></Image>
                      
                        </View></Card>












                </View>





            </ScrollView>

        </View>







    );
}


export default CardCentral;


const styles = StyleSheet.create({


    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ECF0F1',
        width: '100%',


    },

    image: {
        marginLeft: 50,
        alignSelf: 'flex-end',
        margin: 5,
        marginLeft: 135

    },
    textinput: {
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 4,
    },
    Button: {
        width: 30,
        borderRadius: 4,
        height: 40,
        marginLeft: 10


    }

});

