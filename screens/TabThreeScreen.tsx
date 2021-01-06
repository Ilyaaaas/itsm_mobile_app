import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default function TabThreeScreen() {
  return (
      <Container>
        {/*<Header />*/}
        <CardItem style={{marginTop: 50}}>
          <Left>
            <Thumbnail source={require('../assets/images/Done.jpg')} />
            <Body>
              <Text>Ахметов Ильяс</Text>
            </Body>
          </Left>
        </CardItem>
        <Grid>
          <Col>
            <Card>
              <CardItem>
                <Left>
                  <Body>
                    <Text>Аналитика</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={require('../assets/images/chart.png')} style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="pie" />
                    <Text>5 графиков</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Left>
                  <Body>
                    <Text>Чат</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={{uri: 'https://media.istockphoto.com/vectors/flat-design-concept-message-and-chat-present-by-icon-text-message-vector-id963195038?k=6&m=963195038&s=170667a&w=0&h=2ehEvnY7OyeqeBbZ6rJEzgEL1v5svdpxRM-pVDMI5gw='}} style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>4 новых</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardItem>
                <Left>
                  <Body>
                    <Text>Отчеты</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={require('../assets/images/pie.png')} style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="pulse" />
                    <Text>2 отчета</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Left>
                  <Body>
                    <Text>Самообслуживание</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={{uri: 'https://www.pngrepo.com/png/228811/512/feeder.png'}} style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="settings"/>
                    <Text>7 достуных функций</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
          </Col>
        </Grid>
      </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  card:
  {
    width: '50%'
  }
});
