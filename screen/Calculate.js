import React, { useEffect, useState } from 'react';
import { styles } from '../assets/style';
import { View, TextField, Text, Button, Assets, Image } from 'react-native-ui-lib';
// import { Container } from './styles';

import { TextInput, KeyboardAvoidingView } from 'react-native'



const Welcome = ({ navigation }) => {

    const [number, onChangeNumber] = React.useState(0);
    const [dados, setDados] = useState([])
    const [dol, setDol] = useState('');
    const cal = () => {

        setDol(number * 47, 53)

    }
     useEffect(() => {cal()
    }, []);

    return (
        <View flex center style={styles.container}>

            <View center style={styles.cardCentral}>

                <Image source={{uri: 'https://i.ibb.co/wNM8Znt/logo-svg-xmr.png'}} style={styles.image} style={{width:80, height:80,borderRadius:50,marginBottom:5}} />

                <Text white text40>SOL</Text>
                <Text white text40>{dados}</Text>



                <Text marginB-20 text80l color={'gray'}>currency converter</Text>
                <View row style={styles.textfiel}  >
                    <TextInput
                        value={number} onChangeText={onChangeNumber} color={'gray'} style={{
                            width: '60%', borderWidth: 1, height: 30, marginTop: 15,
                            marginRight: 20, borderColor: 'gray', padding: 5, borderRadius: 4
                        }}></TextInput>
                    <Image style={{ width: 40, height: 40, marginTop: 10 }}

                        source={{
                            uri: 'https://i.ibb.co/wNM8Znt/logo-svg-xmr.png',
                        }}
                    />
                    <Text text70BL marginR-15 marginT-20 marginL-5 white>SOL</Text>

                </View>

                <View row style={styles.textfiel}  >
                    <View
                        style={{
                            width: '60%', borderWidth: 1, height: 30, marginTop: 15,
                            marginRight: 20, borderColor: 'gray', padding: 5, borderRadius: 4
                        }}>

                        <Text color={'gray'}>{dol}</Text>


                    </View>
                    <Image style={{ width:40, height:40, marginTop: 10, borderRadius: 50 }}

                        source={{
                            uri: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
                        }}
                    />
                    <Text text70BL marginR-15 marginT-20 marginL-5 white>USDC</Text>

                </View>
                <Button onPress={cal} style={styles.buttonBlack} label={'Calculate'}></Button>


            </View>

        </View>
    );
}

export default Welcome;

