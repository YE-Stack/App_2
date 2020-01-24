import React from 'react';
import { View, Text,TextInput, Button, Alert, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import styles from './styles'
import firebase from '../HiddenKey/config'

export default class Login extends React.Component {

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

  onLoginPress(){
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {
      console.log("Success!");
      this.props.navigation.navigate('Home')
    })
    .catch(() => {
      console.log("Fail!");
    })
  }

  render() {
    return (
        <View style={styles.parent}>
          <View style={{flex:0.5}}>
          </View>
          <KeyboardAvoidingView>
            <ScrollView>
              <View style={{flex: 3, margin: 25}}>
                  <View style={styles.inputSection}>
                    <Icon3 name="mobile-phone" color = "#49ADB6" size={30} style={{alignSelf: 'center'}}></Icon3>
                    <View style={styles.inputField}>
                      <TextInput
                          value={this.state.email}
                          placeholder="Email Id"
                          onChangeText={(value) => this.setState({ email: value })}
                          placeholderTextColor="grey"
                          style={{fontSize: 13,alignSelf: 'flex-start',color: 'black',width:'75%',marginLeft: 10}}                   
                          keyboardType="default"
                          autoCapitalize="none"
                      />  
                    </View>
                  </View>
                  <View style={styles.inputSection}>
                    <Icon name="md-lock" color = "#49ADB6" size={30}  style={{alignSelf: 'center', marginLeft: -5}}></Icon>
                    <View style={styles.inputField}>
                      <TextInput
                          value={this.state.password}
                          placeholder="Password"
                          onChangeText={(value) => this.setState({ password: value })}
                          placeholderTextColor="grey"
                          style={{fontSize: 13,alignSelf: 'flex-start',color: 'black',width:'75%',marginLeft: 10}}
                          secureTextEntry={true}
                          autoCapitalize="none"
                          keyboardType="default"
                      />
                    </View>
                  </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
          <TouchableOpacity style={styles.bookingButtonUse}
              onPress={() => {this.onLoginPress()}}>
                <Text style={{color: 'white', textAlign: 'center', paddingTop: 10}}>Login</Text>
          </TouchableOpacity>
          <View style={{flex: 1,flexDirection: 'row', alignSelf: 'center', paddingTop: 15}}>
            <Text>New User?</Text>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Register')}}>
              <Text style={{color: '#49ADB6'}}>  Sign Up</Text>
            </TouchableOpacity>
          </View>           
        </View>
    );
  }
}