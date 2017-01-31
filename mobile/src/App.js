import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';

import store from './store';
import Login from './components/auth/Login';

export default class Stocky extends Component {
  render() {
    return (
      <Provider store={ store }>
        <View style={styles.container}>
          <Text>Welcome to the Facebook SDK for React Native!</Text>
          <Login />
        </View>
      </Provider>
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
