import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { TabNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen';




const NotLoggedUserTab = TabNavigator({
  Home: {
    screen: LoginScreen,
  }
});

export default NotLoggedUserTab;