import Notlogged from "./pages/notlogged";

import React from 'react';
// import { View, Text } from 'react-native';
// import { TabNavigator } from 'react-navigation';

// const HomeScreen = () => (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Home Screen 007</Text>
//   </View>
// );

// const ProfileScreen = () => (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Profile Screen</Text>
//   </View>
// );

// const RootTabs = TabNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
//   Profile: {
//     screen: ProfileScreen,
//   },
// });


class AppHome extends React.Component {

  render() {
    return <Notlogged/>
  }

}


export default AppHome;

