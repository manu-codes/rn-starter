import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'


class ProfileScreen extends React.Component {

    render() {
        return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{`Hello ${this.props.user.username}!!`}</Text>
            <Text>{`logged at ${this.props.user.loggedInTime}!!`}</Text>
        </View>
    }

}



const mapStateToProps = state => {

    return {
        loginStatus: state.loginReducer.loginStatus,
        user: state.loginReducer.user
    }
}



export default connect(
    mapStateToProps
)(ProfileScreen)
