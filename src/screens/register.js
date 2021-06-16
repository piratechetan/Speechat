import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {
  Container,
  Form,
  Item,
  Input,
  Text,
  Button,
  Thumbnail,
  Content,
} from 'native-base';

import Storage from '@react-native-firebase/storage';
import ProgressBar from 'react-native-progress/Bar';
import logo from '../assets/InstaClone_logo.png';
import ImagePicker from 'react-native-image-picker';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import propTypes from 'prop-types';
import {signup} from '../action/auth';
import {connect} from 'react-redux';
const Register = ({signup, navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const doSignUp = async () => {
    signup({name,email,password});
  };
  return (
    <Container style={styles.container}>
      <Content padder style={{marginTop: 10}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'black', fontSize: 30}}>Speed</Text>
            <Text style={{color: '#5DA3FA', fontSize: 30}}>Chat</Text>
          </View>
          <Text
            style={{
              alignSelf: 'center',
              marginTop: 5,
              color: '#758283',
              fontWeight: '900',
            }}>
            Sign up to chat with
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              marginBottom: 10,
              color: '#758283',
              fontWeight: '900',
            }}>
            your friends
          </Text>

          <Form>
            <Item regular style={styles.formItem}>
              <AntDesign name="user" size={25} style={{margin: 10}} />
              <Input
                placeholder="Name"
                placeholderTextColor="grey"
                value={name}
                style={{color: 'black'}}
                onChangeText={text => setName(text)}
              />
            </Item>
            <Item regular style={styles.formItem}>
              <Fontisto name="email" size={25} style={{margin: 10}} />
              <Input
                placeholder="Email"
                placeholderTextColor="grey"
                value={email}
                style={{color: 'black'}}
                onChangeText={text => setEmail(text)}
              />
            </Item>

            <Item regular style={styles.formItem}>
              <MaterialIcons name="security" size={25} style={{margin: 10}} />
              <Input
                placeholder="Password"
                placeholderTextColor="grey"
                value={password}
                secureTextEntry={true}
                style={{color: 'black'}}
                onChangeText={text => setPassword(text)}
              />
            </Item>

            <Button
              regular
              block
              onPress={doSignUp}
              style={{backgroundColor: '#1B98F5', margin: 15}}>
              <Text>Sign Up</Text>
            </Button>
            <Text
              style={{
                alignSelf: 'center',
                marginTop: 5,
                color: '#758283',
                fontWeight: '900',
              }}>
              By signing up, you are agree to our
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                color: '#758283',
                fontWeight: '900',
              }}>
              Terms, Data Policy and Cookies
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                marginBottom: 10,
                color: '#758283',
                fontWeight: '900',
              }}>
              Policy
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                justifyContent: 'center',
              }}>
              <Text style={{color: 'grey'}}>Have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={{marginLeft: 5}}>
                <Text style={{color: '#1B98F5'}}>Login</Text>
              </TouchableOpacity>
            </View>
          </Form>
        </ScrollView>
      </Content>
    </Container>
  );
};

const mapDispatchToProps = {
  signup: data => signup(data),
};
signup.propTypes = {
  signup: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Register);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'flex-start',
  },
  image: {
    alignSelf: 'center',
    width: 210,
    height: 60,
  },
  progress: {width: null, marginBottom: 20},
  formItem: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 7,
    borderColor: 'grey',
    borderWidth: 1,
  },
});
