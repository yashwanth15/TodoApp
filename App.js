import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './app/screens/Login'
import Home from './app/screens/Home'
import store from './app/config/store';
import CreateTodo from './app/screens/CreateTodo'
import { Provider } from 'react-redux';

export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={{flex:1,backgroundColor:'black'}}>
        <RootStack/>
      </SafeAreaView>
    );
  }
}

const RootStack = createStackNavigator({
  Login:{
    screen: Login
  },
  Home:{
    screen: Home
  },
  CreateTodo:{
    screen:CreateTodo
  }
},
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  }
);
