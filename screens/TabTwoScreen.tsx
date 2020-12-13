import * as React from 'react';
import {KeyboardAvoidingView, Button, TouchableOpacity, Image, StyleSheet, TextInput, Picker, Platform, Keyboard, TouchableWithoutFeedback, ScrollView, SafeAreaView} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {useState} from "react";
// import { Camera, Permissions } from 'expo';
// import Camera from 'react-native-camera';
import * as DocumentPicker from 'expo-document-picker';

export default function TabTwoScreen() {
    const [sendingState, setSendingState] = useState('didntsend');
    const [selectedValue, setSelectedValue] = useState("java");
    const [reqCateg, setReqCateg] = useState("");
    const [reqDescr, setReqDescr] = useState("");

    console.log('sendingState '+sendingState);
    console.log('reqCateg '+reqCateg);
    // console.log(reqDescr.text);
    if(sendingState == 'sent')
    {
        if(reqCateg != '')
        {
            DocumentPicker.getDocumentAsync(options)
            console.log('done');
            // var formData = new FormData();
            // formData.append('categ', reqCateg);
            // formData.append('serviceName', '2');
            // formData.append('descr', 'value');
            // const requestOptions = {
            //     method: 'POST',
            //     headers: {'Content-Type': 'application/json'},
            //     body: formData
            // };
            // return fetch('https://onerstudiyasy.kz/itsm_create_req.php', requestOptions)
            //     .then((response) => response.json())
            //     .then((json) => {
            //         console.log(json);
            //         //return json;
            //     })
            //     .finally(setSendingState('didntsend'))
            //     .finally(setReqCateg(''));
            setSendingState('didntsend');
        }
    }

    return (
        <ScrollView
            style={styles.container}>
          <View style={{marginTop: -100, height: 100}}>
                <Text style={{flexDirection: 'row'}}>Выберите каталог</Text>
                  <Picker
                      selectedValue={reqCateg}
                      style={styles.dropdown_inp}
                      onValueChange={(itemValue, itemIndex) => setReqCateg(itemValue)}
                  >
                      <Picker.Item label="" value="" />
                      <Picker.Item label="Аппартаное обеспечение" value="1"/>
                      <Picker.Item label="Обеспечение бизнеса" value="2" />
                      <Picker.Item label="Программное обеспечение" value="3" />
                      <Picker.Item label="Другие услуги" value="4" />
                  </Picker>
          </View>
          <View style={{marginTop: 20}}>
            <Text>Опишите услугу</Text>
            <TextInput
                // multiline={true}
                numberOfLines={3}
                onChangeText={(text) => setReqDescr({text})}
                style={{height: 120, borderColor: 'gray', borderWidth: 1, width: 400}}
                placeholder="Поиск"
            />
          </View>
          <View style={{marginTop: 20}}>
            <Text>Вложение</Text>
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 400}}
                placeholder="Поиск"
            />
          </View>
          <View style={{marginTop: 20}}>
              <Button
                  onPress={() => setSendingState('sent')}
                  title="Отправить"
                  color=""
              />
          </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
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
        padding: 10,
        margin: 40
    },
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginTop: -100,
  //   paddingTop: -100,
  //   backgroundColor: 'white'
  // },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
    dropdown_inp:
    {
        ...Platform.select({
            ios: {
                height: 35, width: 150, marginTop: -20, width: 400,
            },
            android: {
                height: 20, width: 150, paddingBottom: 40, width: 400,
            },
            default: {
                // other platforms, web for example
                backgroundColor: 'blue'
            }
        }),
    }
});
