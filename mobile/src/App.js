import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from './components/Login';

export default class Stocky extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to the Facebook SDK for React Native!</Text>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
