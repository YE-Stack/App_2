import React from 'react';
import { View, Text,Button } from 'react-native';
import 'react-native-gesture-handler';
import { createAppContainer, createSwitchNavigator  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Login from './app/components/Login';

export default createAppContainer(createSwitchNavigator(
  {
    Login: Login,

  },
  {
    initialRouteName: 'Login',
  }
),

);