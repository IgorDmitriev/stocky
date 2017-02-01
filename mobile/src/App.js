import React, { Component } from 'react';
import {
  Navigator,
  Text
} from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './store';
import AuthScene from './components/auth/AuthSceneContainer';
import UserIndex from './components/user/UserIndex';

export default class Stocky extends Component {

  renderScene (route, navigator) {
    switch (route.id) {
      case 'Auth':
        // return <AuthScene navigator={ navigator }/>;
        return <UserIndex navigator={ navigator }/>;
      default:
        return <Text>Logged in</Text>;
    }
  }

  render() {
    const store = configureStore();
    return (
      <Provider store={ store }>
        <Navigator
          style={{ flex: 1}}
          initialRoute={{ id: 'Auth', title: 'Log in' }}
          renderScene={ this.renderScene } />
      </Provider>
    );
  }
}
