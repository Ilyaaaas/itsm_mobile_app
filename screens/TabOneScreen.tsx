import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView, Image, TextInput, TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab, TabHeading, Icon, Textarea, Form, Button } from 'native-base';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import * as DocumentPicker from 'expo-document-picker';

export default function TabOneScreen() {
    const [token, setToken] = useState('');
    const [dataJson, setDataJson] = useState();
    const [idLoading, setLoading] = useState(true);
    const [currentComponent, setCurrentComponent] = useState('all_requests');
    const [currentARtab, setCurrentARtab] = useState('info');
    const [currentReqItem, setCurrentReqItem] = useState('info');

    const albumPressed = id =>
    {
        setCurrentComponent('request_detail')
    }

    //элемент флэтЛиста журнал
    const renderItemJournal = ({item}) => (
        <TouchableWithoutFeedback onPress={() => albumPressed('22')}>
            <View style={{flex: 2, flexDirection: 'row', paddingTop: 10}}>
                <Image style={styles.message_img_small} source={{uri: item.img_source}}></Image>
                <View style={{flex: 0, flexDirection: 'column', paddingRight: 10, paddingLeft: 2}}>
                    <Text style={{fontSize: 18, color: '#898989',}}>test</Text>
                    <Text style={{textAlign: 'right', color: '#898989',}}>test</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );

    //элемент флэтЛиста
    const renderItemComment = ({item}) => (
        <TouchableWithoutFeedback onPress={() => albumPressed('1')}>
            <View style={{flex: 2, flexDirection: 'row', paddingTop: 10}}>
                {/*<Image style={styles.message_img_small} source={{uri: item[1].descr}}></Image>*/}
                <View style={{flex: 0, flexDirection: 'column', paddingRight: 10, paddingLeft: 2}}>
                    <Text style={{fontSize: 18, color: '#898989',}}>22</Text>
                    <Text style={{textAlign: 'right', color: '#898989',}}></Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );

    //выполняется при монтировании активити
    useEffect(() => {
        // if(idLoading == true) {
        //     // fetch('http://portal.skbs.kz/api/service-requests/v1/request?access_token=k1LLvTkV9FVwKlKwc047mhdi6sy2vXyi')
        //     fetch('https://onerstudiyasy.kz/itsm_requests.php')
        //         .then(response => response.json())
        //         // .then(data => console.log(data))
        //         .then(data => setDataJson(data.items))
        //         .catch(error => console.error(error))
        //         .finally(setLoading(false));
        // }

        if(idLoading == true) {
            fetch('http://portal.skbs.kz/api/service-requests/v1/request?access_token=k1LLvTkV9FVwKlKwc047mhdi6sy2vXyi&fields=id,status_id,descr&expand=status&expand=author',
                {
                    // method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => response.json())
                // .then(data => console.log(data.items))
                .then(data => setDataJson(data.items))
                .catch(error => console.error(error))
                .finally(setLoading(false));
        }
    });

    function showReqDetail(itemID)
    {
        setCurrentReqItem(itemID)
        setCurrentComponent('request_detail')
        fetch('https://portal.skbs.kz/api/service-requests/v1/request?access_token=k1LLvTkV9FVwKlKwc047mhdi6sy2vXyi&fields=id,status_id,descr&expand=status&expand=author')
            .then(response => response.json())
            .then(data => setDataJson(data.items))
            .catch(error => console.error(error))
            .finally(setLoading(false));
    }

    //вьюха одной заявки
    const renderItem = ({item}) => (
        <TouchableWithoutFeedback onPress={() => showReqDetail(item.id)}>
            <View style={{flex: 2, flexDirection: 'row', paddingTop: 10}}>
                <Image style={styles.message_img} source={{uri: 'http://portal.skbs.kz/'+item.author.ava_file}}></Image>
                <View style={{flex: 0, flexDirection: 'column', paddingRight: 100, paddingLeft: 20}}>
                    <Text numberOfLines={1} style={{fontSize: 14, color: '#898989', width: 200, fontWeight: 'bold',}}>{item.author.person_name}</Text>
                    <Text style={{fontSize: 10, color: '#898989',}}>Организация: {item.author.company_name}</Text>
                    <Text numberOfLines={3} style={{fontSize: 12, color: '#898989', width: 280,}}>{item.descr}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );

    if(currentComponent == 'all_requests')
    {
        return (
            <SafeAreaView
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                }}>
                <View>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        placeholder="Поиск"
                    />
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Button onPress={() => alert('prev page')}>
                        <Icon name='arrow-back'/>
                    </Button>
                    <Button style={{position: 'absolute', right: 0}} onPress={() => alert('next page')}>
                        <Icon name='arrow-forward' />
                    </Button>
                </View>
                <FlatList
                    data={dataJson}
                    renderItem={renderItem}
                    // keyExtractor={item => item.items[1].descr}
                />
            </SafeAreaView>
        );
    }
        else if (currentComponent == 'request_detail')
    {
        return (
            <View>
                <Button
                    onPress={() => setCurrentComponent('all_requests')}
                    title="Назад"
                />
                <View style={{flex: 0, flexDirection: 'row', paddingRight: 100, paddingLeft: 20}}>
                    <Image style={styles.message_img} source={require('../assets/images/Done.jpg')}></Image>
                    <View style={{flex: 0, flexDirection: 'column', paddingRight: 1, paddingLeft: 20,}}>
                        <Text style={{fontSize: 18, color: '#898989',}}>{currentReqItem}</Text>
                        <Text style={{fontSize: 12, color: '#898989',}}>Ведущий консультант</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row',}}>
                    <Container>
                        <Tabs style={{backgroundColor: '#fff'}}>
                            <Tab heading={ <TabHeading><Text>Информация</Text></TabHeading>}>
                                <Text style={{padding: 10,}}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged. It was popularised in
                                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including
                                    versions of Lorem Ipsum.</Text>
                            </Tab>
                            <Tab heading={ <TabHeading><Text>Журнал</Text></TabHeading>}>
                                <View style={{flex: 0, flexDirection: 'column', paddingRight: 1, paddingLeft: 20,}}>
                                    <FlatList
                                        data={dataJson}
                                        renderItem={renderItemJournal}
                                        keyExtractor={item => item.id}
                                    />
                                </View>
                            </Tab>
                            <Tab heading={ <TabHeading><Text>Комментарии</Text></TabHeading>}>
                                <View style={{flex: 0, flexDirection: 'column', padding: 10,}}>
                                    {/*<FlatList*/}
                                    {/*    data={dataJson}*/}
                                    {/*    renderItem={renderItemComment}*/}
                                    {/*    keyExtractor={item => item.items[1].descr}*/}
                                    {/*/>*/}
                                    <Form>
                                        <Textarea rowSpan={5} bordered placeholder="Textarea" />
                                    </Form>
                                    <Button
                                        title="Отправить"
                                    />
                                </View>
                            </Tab>
                        </Tabs>
                    </Container>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 0,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    item:
        {
            flexDirection:'row',
        },
    message_img:
        {
            width: 80,
            height: 80,
            borderRadius: 40,
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
