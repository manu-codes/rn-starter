
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

import React from 'react';
import { connect } from 'react-redux'
import Notlogged from "./pages/notlogged";
import Logged from './pages/logged';

class AppHome extends React.Component {

  render() {
    return this.props.loginStatus ? <Logged {...this.props}/> : <Notlogged />
  }

}

const mapStateToProps = state => {
  console.log(state);
  return {
    loginStatus: state.loginReducer.loginStatus,
    user:state.loginReducer.user
  }
}



export default connect(
  mapStateToProps
)(AppHome)