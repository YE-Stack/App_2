import React from 'react';
import { View, Text,TextInput, Button, Alert, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import styles from './styles'
import firebase from '../HiddenKey/config'

export default class Home extends React.Component {

  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      success: false,
      isLoading: true,
    }
  }

  static navigationOptions={
    header: null  
  } 

  render() {
    return (
        <View style={styles.parent}>
          <View style={{flex:0.5}}>
          </View>
                     
        </View>
    );
  }
}