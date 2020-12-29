import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Text, View, TouchableHighlight, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Image} from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import TabTwoScreen from "./screens/TabTwoScreen";
import {RootStackParamList} from "./types";
import LoginPage from "./components/LoginPage";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const Stack = createStackNavigator<RootStackParamList>();
  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const storeData = async() =>{
    const value = await AsyncStorage.getItem('token');
    setToken(value)
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    if(token == "")
    {
    //storeData()
    console.log(token)
      return (
          <ImageBackground style={styles.imgBackground}
                           resizeMode='cover' source={require('./assets/images/backgroung_login_page.jpeg')}>
            <View style={styles.containerMain}>
              <Image style={{marginTop: -200}} source={require('./assets/images/logo-sk-v-150.png')}></Image>
              <TextInput
                  style={styles.inputText}
                  value={email}
                  placeholder="Email..."
                  placeholderTextColor="#003f5c"
                  onChangeText={text => setEmail(text)}
              />
              <TextInput
                  style={styles.inputText}
                  value={password}
                  secureTextEntry={true}
                  placeholder="Password..."
                  placeholderTextColor="#003f5c"
                  onChangeText={text => setPassword(text)}
              />
              <TouchableOpacity
                  style={styles.loginBtn}
                  onPress={storeData}
              >
                <Text style={styles.loginText}>Войти</Text>
              </TouchableOpacity>
              <View style={styles.bottomView}>

              </View>
            </View>
          </ImageBackground>
          // <View><Text>test</Text></View>
        //   <SafeAreaProvider>
        //   <NavigationContainer>
        //     <Stack.Navigator>
        //       <Stack.Screen
        //           name="LoginPage"
        //           component={LoginPage}
        //           options={{ title: 'Welcome' }}
        //       />
        //     </Stack.Navigator>
        //   </NavigationContainer>
        // </SafeAreaProvider>
      );
    }
      else
    {
      return (
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
      );
    }
  }
}



var styles = StyleSheet.create({
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 0,
  },
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  inputText:{
    height:50,
    backgroundColor: 'white',
    borderRadius:5,
    marginTop: 10,
    width:300,
    opacity: 0.8,
    paddingHorizontal: 10,
  },
  inputView:{
    backgroundColor: '#FFFFFF',
    justifyContent:"center",
    flexDirection: 'row',
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 20,
    borderColor: '#000',
    textAlign: 'center',
    backgroundColor:"#465881",
  },
  loginBtn:
  {
    backgroundColor: '#FFFFFF',
    width:300,
    borderRadius:5,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    marginBottom:10
  },
  loginText:
  {
    color: '#000',
    textAlign: 'center',
    fontSize: 16,
    padding: 5,
  },
  containerMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  textStyle: {
    color: '#fff',
    fontSize: 18,
  },
});


