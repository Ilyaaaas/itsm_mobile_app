import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default function TabThreeScreen() {
  return (
      <Container>
        <Header />
        <CardItem>
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
                    <Icon active name="thumbs-up" />
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>4 Comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
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
                <Image source={require('../assets/images/chart.png')} style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>4 Comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
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
                <Image source={{uri: 'https://webuildthemes.com/go/assets/images/demo/user-1.jpg'}} style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>4 Comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
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
                <Image source={{uri: 'https://webuildthemes.com/go/assets/images/demo/user-1.jpg'}} style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>4 Comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
              </CardItem>
            </Card>
          </Col>
        </Grid>
      </Container>
      // <Container>
      //   <Header />
      //   <Content style={{flexDirection: 'column',  flex: 1}}>
      //     <Card style={styles.card}>
      //       <CardItem>
      //         <Left>
      //           <Thumbnail source={{uri: 'https://webuildthemes.com/go/assets/images/demo/user-1.jpg'}} />
      //           <Body>
      //             <Text>NativeBase</Text>
      //             <Text note>GeekyAnts</Text>
      //           </Body>
      //         </Left>
      //       </CardItem>
      //       <CardItem cardBody>
      //         <Image source={{uri: 'https://webuildthemes.com/go/assets/images/demo/user-1.jpg'}} style={{height: 200, width: null, flex: 1}}/>
      //       </CardItem>
      //       <CardItem>
      //         <Left>
      //           <Button transparent>
      //             <Icon active name="thumbs-up" />
      //             <Text>12 Likes</Text>
      //           </Button>
      //         </Left>
      //         <Body>
      //           <Button transparent>
      //             <Icon active name="chatbubbles" />
      //             <Text>4 Comments</Text>
      //           </Button>
      //         </Body>
      //         <Right>
      //           <Text>11h ago</Text>
      //         </Right>
      //       </CardItem>
      //     </Card>
      //     <Card style={styles.card}>
      //       <CardItem>
      //         <Left>
      //           <Thumbnail source={{uri: 'https://webuildthemes.com/go/assets/images/demo/user-1.jpg'}} />
      //           <Body>
      //             <Text>NativeBase</Text>
      //             <Text note>GeekyAnts</Text>
      //           </Body>
      //         </Left>
      //       </CardItem>
      //       <CardItem cardBody>
      //         <Image source={{uri: 'https://webuildthemes.com/go/assets/images/demo/user-1.jpg'}} style={{height: 200, width: null, flex: 1}}/>
      //       </CardItem>
      //       <CardItem>
      //         <Left>
      //           <Button transparent>
      //             <Icon active name="thumbs-up" />
      //             <Text>12 Likes</Text>
      //           </Button>
      //         </Left>
      //         <Body>
      //           <Button transparent>
      //             <Icon active name="chatbubbles" />
      //             <Text>4 Comments</Text>
      //           </Button>
      //         </Body>
      //         <Right>
      //           <Text>11h ago</Text>
      //         </Right>
      //       </CardItem>
      //     </Card>
      //   </Content>
      // </Container>
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
