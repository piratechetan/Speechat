import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  Form,
  Item,
  Input,
  Text,
  Button,
  H3,
  Icon,
} from 'native-base';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import logo from '../assets/InstaClone_logo.png';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {signin} from '../action/auth';

const Login = ({navigation, signin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const doSignIn = () => {
    signin({email, password});
  };
  return (
    <Container style={styles.container}>
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

        <Form style={{marginTop: 20, marginBottom: 50}}>
          <Item style={styles.formItem}>
            <Fontisto name="email" size={25} style={{margin: 10}} />
            <Input
              placeholder="Email"
              placeholderTextColor="grey"
              value={email}
              style={{color: 'black'}}
              onChangeText={text => setEmail(text)}
            />
          </Item>
          <Item style={styles.formItem}>
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
            block
            onPress={doSignIn}
            style={{backgroundColor: '#1B98F5', margin: 15}}>
            <Text>Sign In</Text>
          </Button>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'grey'}}>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Register')}
              style={{marginLeft: 5}}>
              <Text style={{color: '#1B98F5'}}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </Form>
      </ScrollView>
    </Container>
  );
};

const mapDispatchToProps = {
  signin: data => signin(data),
};

signin.propTypes = {
  signin: propTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'flex-start',
  },
  heading: {
    textAlign: 'center',
    color: '#fdcb9e',
    marginHorizontal: 5,
    marginTop: 30,
  },
  formItem: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 7,

    borderColor: 'grey',
    borderWidth: 1,
    elevation: 1,
  },
});

export default connect(null, mapDispatchToProps)(Login);
