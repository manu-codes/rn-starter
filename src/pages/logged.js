import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';

import ProfileScreen from './ProfileScreen'




const LoggedUserTab = TabNavigator({
  Profile: {
    screen: ProfileScreen,
  },
});

export default LoggedUserTab;