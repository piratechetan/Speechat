import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {useRoute} from '@react-navigation/native';
import {sendMessage, receiveMessage} from '../action/message';
import {getmessage} from '../action/getmessages';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GiftedChat} from 'react-native-gifted-chat';
const STORAGE_KEY = '@storage_data';
const ChatScreen = ({
  sendMessage,
  receiveMessage,
  getmessage,
  messageState,
}) => {
  const [message, setmessage] = useState('');

  useEffect(() => {
    getmessage(guestuid);
  }, [guestuid]);

  const route = useRoute();
  const currentuid = auth().currentUser.uid;
  const {guestuid} = route.params;
  // console.log(messages);

  const {messages} = messageState;
  const DoSend = async () => {
    await AsyncStorage.setItem(STORAGE_KEY, guestuid);

    console.log(currentuid, guestuid, message);
    sendMessage({currentuid, guestuid, message});
    receiveMessage({currentuid, guestuid, message});
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <FlatList
        inverted
        style={{marginBottom: 80, margin: 10}}
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View
            style={{
              maxWidth: Dimensions.get('window').width / 2 + 10,
              alignSelf: currentuid === item.sendby ? 'flex-end' : 'flex-start',
            }}>
            <View
              style={{
                borderRadius: 20,
                marginTop: 5,
                backgroundColor: currentuid === item.sendby ? '#FFF' : '#ccc',
              }}>
              <Text style={{padding: 10, fontSize: 16, fontWeight: 'bold'}}>
                }
              </Text>
            </View>
          </View>
        )}
      />
      <View
        style={{
          bottom: 0,
          height: 50,
          width: '100%',
          position: 'absolute',
          flexDirection: 'row',
          marginBottom: 10,
          borderColor: '#FFF',
          borderTopWidth: 1,
          paddingTop: 10,
        }}>
        <TouchableOpacity
          style={{
            width: '10%',
            marginLeft: 15,
            marginRight: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Entypo name="camera" style={{color: '#fff'}} size={30} />
        </TouchableOpacity>

        <View
          style={{
            width: '75%',
            justifyContent: 'center',
          }}>
          <TextInput
            placeholder="Enter Message"
            placeholderTextColor="#000"
            style={{
              height: 40,
              width: '80%',
              borderRadius: 12,
              backgroundColor: '#FFF',
            }}
            value={message}
            onChangeText={text => setmessage(text)}
          />
        </View>
        <TouchableOpacity
          style={{
            width: '10%',
            justifyContent: 'center',

            marginRight: 30,
          }}
          onPress={DoSend}>
          <Ionicons name="ios-send-sharp" style={{color: '#fff'}} size={30} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const mapStateToProps = state => ({
  messageState: state.getmessages,
});
const mapDispatchToProps = {
  sendMessage: data => sendMessage(data),
  receiveMessage: data => receiveMessage(data),
  getmessage,
};

ChatScreen.propTypes = {
  sendMessage: propTypes.func.isRequired,
  receiveMessage: propTypes.func.isRequired,
  getmessage: propTypes.func.isRequired,
  messageState: propTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);
