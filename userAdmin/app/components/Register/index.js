import React from 'react';
import { View, Text,TextInput, Button, Alert, Image, KeyboardAvoidingView, ScrollView, Switch, TouchableOpacity, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import PasswordInputText from 'react-native-hide-show-password-input';
import styles from './styles'
import firebase from '../HiddenKey/config'

export default class Register extends React.Component {

  constructor() {
    super()
    this.state = {
      password: '',
      email: '',
      emailCheck: true,
    }
  }

  static navigationOptions={
    header: null  
  }

  checkEmail(email){
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(email) === false){
        this.setState({emailCheck: false});
    }else{
        this.setState({emailCheck: true, nullCheck: true});
        console.warn("Valid email");
    }
  }

  checkpasswordLength(){
    if(this.state.password.length < 5)
        this.setState({passLengthCheck: false})
    else{
        console.warn("Password Length Valid")
        this.setState({passLengthCheck: true, nullCheck: true})
    }    
  }

  onSubmit(){
    console.log(this.state.email, this.state.password)
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {
        console.log("Registered");
    })
    .catch((err) => {
        alert("Error in registration")
        console.log("Error", err);
    })
  }

  render() {
    return (
            <View style={styles.parent}>
                <View style={{flex: 0.5}}/>
                <KeyboardAvoidingView>
                    <ScrollView>
                        
                            <View style={styles.inputSection}>
                                <Icon name="ios-mail" color = "#49ADB6" size={30} style={{alignSelf: 'center', marginLeft: -3}}></Icon>
                                <View style={styles.inputField}>
                                    <TextInput
                                        value={this.state.email}
                                        placeholder="Email Id"
                                        onChangeText={(value) => {this.setState({ email: value });this.checkEmail(this.state.email);}}
                                        placeholderTextColor="grey"
                                        style={{fontSize: 15,alignSelf: 'flex-start',color: 'black',width:'75%',marginLeft: 10}}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        onSubmitEditing={() => {this.checkEmail(this.state.email)}}
                                    />
                                </View>
                            </View>
                            {this.state.emailCheck ? null: <Text style={{color: 'red', padding : 5, margin: 10}}>Invalid Email</Text> }

                            <View style={styles.inputSection}>
                                <Icon name="md-lock" color = "#49ADB6" size={30} style={{alignSelf: 'center'}}></Icon>
                                <View style={styles.inputField}>
                                    <PasswordInputText
                                        value={this.state.password}
                                        onBlur={() => {this.checkpasswordLength();}}
                                        onChangeText={(value) => {this.setState({ password: value });this.checkpasswordLength();}}
                                        placeholderTextColor="grey"
                                        style={{fontSize: 13,alignSelf: 'flex-start',color: 'black',width:'90%',marginLeft: 13, marginTop: '0%'}}
                                        secureTextEntry={this.state.showPassword}
                                        keyboardType="default"
                                        onSubmitEditing={() => {this.checkpasswordLength()}}
                                    />
                                </View>
                            </View>
                        {this.state.passLengthCheck && !this.state.isSubmit ? null: <Text style={{color: 'red', padding : 5, margin: 10}}>Password length is less than 6</Text> }

                        <View style={{flex: 1}}/>
                        <View style={{flex: 1}}/>
                    </ScrollView>
                </KeyboardAvoidingView>
                <TouchableOpacity style={styles.bookingButtonUse}
                        onPress={() => {this.onSubmit()}}>
                            <Text style={{color: 'white', textAlign: 'center', paddingTop: 10}}>Register</Text>
                </TouchableOpacity>
                <View style={{flex: 1,flexDirection: 'row', alignSelf: 'center', paddingTop: 15}}>
                    <Text>Already a User?</Text>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Login')}}>
                        <Text style={{color: '#49ADB6'}}> Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
  }
}