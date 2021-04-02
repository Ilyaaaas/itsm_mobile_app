import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import data from './data';
import { Transition, Transitioning } from 'react-native-reanimated';
import { Container, Header, Content, Accordion } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";

const transition = (
    <Transition.Together>
        <Transition.In type='fade' durationMs={200} />
        <Transition.Change />
        <Transition.Out type='fade' durationMs={200} />
    </Transition.Together>
);

export default function App() {
    const [currentIndex, setCurrentIndex] = React.useState(null);
    const [isLoading, setLoading] = useState(true);
    const ref = React.useRef();
    const [accessToken, setAccessToken] = useState('');
    const [continueToken, setContinueToken] = useState('');
    const [userId, setUserId] = useState('');
    const [personName, setPersonName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [username, setUsername] = useState('');
    const dataArray = [
        { title: "Контакты", content: username },
        { title: "Настройки", content: "Нет доступных настроек" },
        { title: "Уведомления", content: "Нет уведомлений" }
    ];

    if(isLoading == true) {
        console.log('profile');
        fetchMyAPI2();
        async function fetchMyAPI2() {
            await AsyncStorage.getItem('accessToken').then(req => JSON.parse(req))
                // .then(json => console.log(json[0].accessToken))
                .then(json => {
                    setAccessToken(json[0].accessToken);
                    setUserId(json[1].userId);
                })
                .then(json2 => console.log('json2'))
                .catch(error => console.log('error!'));
            let data = {
                method: 'GET',
                credentials: 'same-origin',
                mode: 'same-origin',
                headers: {
                    'Accept':       'application/json',
                    'Content-Type': 'application/json',
                    'x-api-key': accessToken,
                }
            }
            return fetch('http://api.smart24.kz/portal/v1/user/'+userId, data)
                .then(response => response.json())
                .then(json => {
                        console.log(json);
                        setPersonName(json.personName);
                        setCompanyName(json.companyName);
                        setUsername(json.username);
                    }
                )
            console.log('finish');
        }
    }
    return (
        <Container>
            <View style={{flex: 0, flexDirection: 'column', alignItems: 'center', marginTop: 50}}>
                <Image style={styles.message_img} source={require('../assets/images/Done.jpg')}></Image>
                <View style={{flex: 0, flexDirection: 'column', alignItems: 'center'}}>
                    <Text style={{fontSize: 22, color: '#898989',}}>{personName}</Text>
                    <Text style={{fontSize: 14, color: '#898989',}}>{companyName}</Text>
                </View>
            </View>
            <Content padder>
                <Accordion dataArray={dataArray} expanded={0}/>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    cardContainer: {
        flexGrow: 1,
    },
    card: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 22,
        fontWeight: '900',
        letterSpacing: -2,
    },
    body: {
        fontSize: 20,
        lineHeight: 20 * 1.5,
        textAlign: 'center',
    },
    subCategoriesList: {
        marginTop: 20,
    },
    profile_head:
        {
            height: 100,
        },
    message_img:
        {
            width: 80,
            height: 80,
            borderRadius: 40,
            alignContent: 'center',
        },
    message_img_small:
        {
            width: 20,
            height: 20,
            borderRadius: 40,
        },
    message_text:
        {
            width: 50,
            height: 50,
        }
});
