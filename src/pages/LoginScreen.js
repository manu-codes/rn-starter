import React from 'react';
import { View, TextInput, Button } from 'react-native';

class LoginScreen extends React.Component {

    render() {
        return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput style={{width:150}}></TextInput>
            <TextInput style={{width:150}}></TextInput>
            <Button title='Login' onPress></Button>
        </View>
    }

}


export default LoginScreen;

