import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux'


class LoginScreen extends React.Component {

    render() {
        return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput style={{ width: 150, height:60, borderBottomColor:'blue', borderBottomWidth:1  }} onChangeText={(val) => this.setState({ username: val })}></TextInput>
            <TextInput secureTextEntry style={{ width: 150, height:60,borderBottomColor:'blue', borderBottomWidth:1 }} onChangeText={(val) => this.setState({ password: val })}></TextInput>
            <Button title='Login' onPress={() => this.props.doLogin(this.state.username, this.state.password)}></Button>
        </View>
    }

}

const mapStateToProps = state => {
    return {
        loginStatus: state.loginStatus
    }
}

const mapDispatchToProps = dispatch => {
    console.log('-------');
    return {
        doLogin: (username, password) => dispatch({
            type: 'DO_LOGIN',
            username,
            password
        })
    }
}

export default connect(
    mapStateToProps
)(LoginScreen)
