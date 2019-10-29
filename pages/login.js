
import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator, StackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Container, Item, Form, Input, Button, Label } from "native-base";
import firebase from './firebase';
import Icon from 'react-native-vector-icons/Ionicons';


export default class LoginScreen extends Component {

state = { email: '', password: '', errorMessage: null }
handleSignUp = () => {
firebase
.auth()
.createUserWithEmailAndPassword(this.state.email, this.state.password)
.then(() => this.props.navigation.navigate('App'))
.catch(error => this.setState({ errorMessage: error.message }))
}

handleLogin = () => {
const { email, password } = this.state
firebase
.auth()
.signInWithEmailAndPassword(email, password)
.then(() => this.props.navigation.navigate('App'))
.catch(error => this.setState({ errorMessage: error.message }))
}

render() {


return (
<Container style={styles.container}>
   
    <Form style={styles.formStyle}>
        <Item style={styles.floatingLabel} floatingLabel>
            <Label>Email</Label>
            <Input
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={email => this.setState({ email })}
            />
        </Item>
        <Item floatingLabel>
            <Label>Password</Label>
            <Input

            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={password => this.setState({ password })}
            />
        </Item>

        <Button onPress={this.handleLogin} style={styles.Button1}>
            <Text style={styles.text}>Login</Text>
        </Button>

        <Button onPress={this.handleSignUp} style={styles.Button2}>
            <Text style={styles.text}>Signup</Text>
        </Button>
    </Form>
</Container>
);
}
}

const styles = StyleSheet.create({
container: {
flex: 1,
paddingHorizontal: 20,
paddingVertical: 190,
justifyContent: "flex-start"

},
formStyle: {
borderRadius: 5,
height: 300,
top: 10,
},

Button2: {
backgroundColor: '#3e0991',
borderRadius: 25,
marginTop: 10,
alignContent: 'center',
justifyContent: 'center',
color: 'white',
},
text: {
    color: 'white',
    fontWeight: '400',
    fontSize: 16,
},
Button1: {
    backgroundColor: '#247ee0',
    borderRadius: 25,
    marginTop: 10,
    alignContent: 'center',
    justifyContent: 'center',
    color: 'white',
}
})
