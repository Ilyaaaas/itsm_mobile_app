import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import data from './data';
import { Transition, Transitioning } from 'react-native-reanimated';

const transition = (
    <Transition.Together>
      <Transition.In type='fade' durationMs={200} />
      <Transition.Change />
      <Transition.Out type='fade' durationMs={200} />
    </Transition.Together>
);

export default function App() {
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const ref = React.useRef();

  return (
      <Transitioning.View
          ref={ref}
          transition={transition}
          style={styles.container}
      >
        <View style={{height: 200, flex: 0, flexDirection: 'column', alignItems: 'center'}}>
          <Image style={styles.message_img} source={require('../assets/images/Done.jpg')}></Image>
          <View style={{flex: 0, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{fontSize: 22, color: '#898989',}}>Ахметов Ильяс</Text>
            <Text style={{fontSize: 14, color: '#898989',}}>Разработчик</Text>
          </View>
        </View>
        <View style={{flex: 0, paddingRight: 10, paddingLeft: 10}}>
        <StatusBar hidden />
              <TouchableOpacity
                  key={1}
                  onPress={() => {
                    ref.current.animateNextTransition();
                    setCurrentIndex(1 === currentIndex ? null : 1);
                  }}
                  style={styles.cardContainer}
                  activeOpacity={0.9}
              >
                <View style={[styles.card]}>
                  <Text style={styles.heading}>Контакты</Text>
                  {1 === currentIndex && (
                      <View style={styles.subCategoriesList}>
                        <Text>Email</Text>
                          <TextInput
                              style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 300}}
                              placeholder="Поиск"
                          />
                          <Text>Номер телефон</Text>
                          <TextInput
                              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                              placeholder="Поиск"
                          />
                      </View>
                  )}
                </View>
              </TouchableOpacity>
            <TouchableOpacity
                key={2}
                onPress={() => {
                  ref.current.animateNextTransition();
                  setCurrentIndex(2 === currentIndex ? null : 2);
                }}
                style={styles.cardContainer}
                activeOpacity={0.9}
            >
              <View style={[styles.card]}>
                <Text style={styles.heading}>Настройки</Text>
                {2 === currentIndex && (
                    <View style={styles.subCategoriesList}>
                      <Text>Test</Text>
                    </View>
                )}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
                key={3}
                onPress={() => {
                  ref.current.animateNextTransition();
                  setCurrentIndex(3 === currentIndex ? null : 3);
                }}
                style={styles.cardContainer}
                activeOpacity={0.9}
            >
              <View style={[styles.card]}>
                <Text style={styles.heading}>Уведомления</Text>
                {3 === currentIndex && (
                    <View style={styles.subCategoriesList}>
                      <Text>Test</Text>
                    </View>
                )}
              </View>
            </TouchableOpacity>
        </View>
      </Transitioning.View>
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
