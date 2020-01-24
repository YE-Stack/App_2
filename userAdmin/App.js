import React from 'react';
import { View, Text,Button } from 'react-native';
import 'react-native-gesture-handler';
import { createAppContainer, createSwitchNavigator  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Login from './app/components/Login';
import Register from './app/components/Register'

import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyDUwsGRANGb5K7IyWJAG62Jm1Rg3MJRRq4",
  authDomain: "vishi-project.firebaseapp.com",
  databaseURL: "vishi-project.firebaseio.com",
  projectId: "vishi-project",
  storageBucket: "vishi-project.appspot.com",
})

export default createAppContainer(createSwitchNavigator(
  {
    Login: Login,
    Register: Register,

  },
  {
    initialRouteName: 'Login',
  }
),

);