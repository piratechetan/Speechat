import React from 'react';
import {} from 'react-native';
import {
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text,
  Header,
  Left,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation, useRoute} from '@react-navigation/native';
const CustomChats = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {username} = route.params;
  return (
    <Header
      androidStatusBarColor="#0f4c75"
      style={{
        backgroundColor: '#0f4c75',
      }}>
      <Left>
        <AntDesign
          name="arrowleft"
          style={{color: '#fff'}}
          size={25}
          onPress={() => navigation.navigate('Home')}
        />
      </Left>
      <Body style={{alignItems: 'center', marginLeft: 75}}>
        <Title>{username}</Title>
      </Body>
      <Right>
        <Entypo name="dots-three-vertical" style={{color: '#fff'}} size={22} />
      </Right>
    </Header>
  );
};

export default CustomChats;
