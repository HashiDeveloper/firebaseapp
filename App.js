import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator, } from 'react-navigation-stack';
import { fromLeft, zoomIn, flipX, flipY } from 'react-navigation-transitions';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

import HomeScreen from './pages/home';
import ProfileScreen from './pages/profile';
import LoginScreen from './pages/login';
import ChatScreen from './pages/chat';

const AuthNavigator = createSwitchNavigator(
{
  Login: LoginScreen
},
{
  initialRouteName: 'Login'
}
);

const HomeNavigator = createBottomTabNavigator(
{
  Home: { screen: HomeScreen,
  navigationOptions: {
  tabBarLabel: 'HOME',
  tabBarIcon: ({ tintColor }) => (
  <Icon name="ios-home" color={tintColor} size={22} />
  )
}
},
Profile: { screen: ProfileScreen,
navigationOptions: {
tabBarLabel: 'PROFILE',
tabBarIcon: ({ tintColor }) => (
<Icon name="ios-person" color={tintColor} size={22} />
)
}
},
Chat: { screen: ChatScreen,
navigationOptions: {
tabBarLabel: 'CHAT',
tabBarIcon: ({ tintColor }) => (
<Icon name="ios-chatboxes" color={tintColor} size={22} />
)
}
},

},
{
  initialRouteName: 'Home',

}
)
const image = require('./assets/logout.png')

export default createAppContainer(
createStackNavigator(

{
  Auth: {
  screen: AuthNavigator,
  navigationOptions: {
  title: 'Simple Chat',
},
},

App: {
screen: HomeNavigator,
navigationOptions: {
title: "Welcome",
headerBackTitle: 'Log out',
headerBackImage: <Image style={{marginLeft:5, height:22, width: 22}} source={require('./assets/logout.png')} />,
},
}
},
{
  initialRouteName: 'Auth', 
  transitionConfig: () => fromLeft(), 

  headerBackTitleVisible: true,
  defaultNavigationOptions: {
  gesturesEnabled: false,
  headerBackTitle: " Log out",

}
}
)
);
