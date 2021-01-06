import * as React from 'react';
import {KeyboardAvoidingView, TouchableOpacity, Image, StyleSheet, TextInput, Picker, Platform, Keyboard, TouchableWithoutFeedback, ScrollView, SafeAreaView} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {useState} from "react";
// import { Camera, Permissions } from 'expo';
// import Camera from 'react-native-camera';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import { Container, Header, Content, Textarea, Form, Button, Icon, ActionSheet } from "native-base";

export default function TabTwoScreen() {
    const [sendingState, setSendingState] = useState('didntsend');
    const [selectedValue, setSelectedValue] = useState("java");
    const [reqCateg, setReqCateg] = useState("");
    const [reqDescr, setReqDescr] = useState("");
    const [file, setFile] = useState();
    var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
    var DESTRUCTIVE_INDEX = 3;
    var CANCEL_INDEX = 4;

    async function sendFile()
    {
        // console.log('response');
        console.log(file);
        console.log(file['_parts'][0][1]['_W']['name']);
        var name = file['_parts'][0][1]['_W']['name'];
        var size = file['_parts'][0][1]['_W']['size'];
        var uri = file['_parts'][0][1]['_W']['uri'];
        let formData = new FormData();
        formData.append('file', { uri: uri, name: name, size: size, type: 'JPG' });
        // console.log(formData);
        const response = await fetch(
            'https://onerstudiyasy.kz/itsm_create_req.php',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': '*/*',
                },
                body: formData
            })
            .then(response => console.log(response.json()))
            .then(response => console.log('test2'))
            .catch(error => alert(error));
        // const responseJson = await response.json();
        // if(responseJson !== null) {
        //     console.log(responseJson);
        // }
        console.log('finish');
    }

    // console.log(reqDescr.text);
    // if(sendingState == 'sent')
    // {
    //     // if(reqCateg != '')
    //     // {
    //         let result = DocumentPicker.getDocumentAsync()
    //         const Mydata = new FormData();
    //         Mydata.append('file', result);
    //         console.log('done');
    //         var formData = new FormData();
    //         formData.append('categ', reqCateg);
    //         formData.append('serviceName', '2');
    //         formData.append('descr', 'value');
    //         const requestOptions = {
    //             method: 'POST',
    //             headers: {'Content-Type': 'application/json'},
    //             body: formData,
    //             data: Mydata
    //         };
    //         return fetch('https://onerstudiyasy.kz/itsm_create_req.php', requestOptions)
    //             .then((response) => response.json())
    //             .then((json) => {
    //                 console.log(json);
    //                 //return json;
    //             })
    //             .finally(setSendingState('didntsend'))
    //             .finally(setReqCateg(''));
    //         setSendingState('didntsend');
    //     // }
    // }

    async function chooseFiles()
    {
        let result = DocumentPicker.getDocumentAsync({
            type: "*/*",
            //type: "image/*",
            // type: "audio/*",
            // type: "application/*",
            // type: "application/pdf",
            // type: "application/msword",
            // type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            // type: "vnd.ms-excel",
            // type: "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            // type: "text/csv",
        })
        const Mydata = new FormData();
        Mydata.append('file', result);
        setFile(Mydata);
        // const dirInfo = FileSystem.getInfoAsync();
        console.log(result);
    }

    return (
        <ScrollView style={styles.container}>
            <View style={{}}>
              <View>
                  <Text>Выберите каталог</Text>
                  <Picker
                      selectedValue={reqCateg}
                      onValueChange={(itemValue, itemIndex) => setReqCateg(itemValue)}
                  >
                      <Picker.Item label="" value="" />
                      <Picker.Item label="Аппартаное обеспечение" value="1"/>
                      <Picker.Item label="Обеспечение бизнеса" value="2" />
                      <Picker.Item label="Программное обеспечение" value="3" />
                      <Picker.Item label="Другие услуги" value="4" />
                  </Picker>
              </View>
              <View>
                <Text>Опишите услугу</Text>
                  <Form>
                      <Textarea rowSpan={5} bordered placeholder="Textarea" />
                  </Form>
              </View>
              <View style={{marginTop: 20}}>
                  <Button full primary
                          onPress={() => chooseFiles()}>
                      <Icon name='paper' />
                      <Text style={{color: '#fff'}}>Выбрать файл</Text>
                  </Button>
              </View>
              <View style={{marginTop: 20}}>
                  <Button full primary
                          onPress={() => sendFile()}>
                      <Text style={{color: '#fff'}}>Отправить</Text>
                  </Button>
              </View>
            </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        flexDirection: 'column',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
    },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
  },
    dropdown_inp:
    {
        ...Platform.select({
            ios: {
                height: 35, marginTop: -20,
            },
            android: {
                height: 20, paddingBottom: 40,
            },
            default: {
                backgroundColor: 'blue'
            }
        }),
    }
});
