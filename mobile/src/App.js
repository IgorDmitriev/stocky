import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './store';
import AuthScene from './components/auth/AuthSceneContainer';

export default class Stocky extends Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={ store }>
        <AuthScene />
      </Provider>
    );
  }
}
