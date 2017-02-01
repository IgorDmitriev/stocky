import React, { Component } from 'react';
import {
  Navigator,
  Text,
  TouchableHighlight
} from 'react-native';
import { Provider } from 'react-redux';
import { LoginManager } from 'react-native-fbsdk';

import configureStore from './store';
import AuthScene from './components/auth/AuthSceneContainer';
import UserIndex from './components/user/UserIndex';
import { requestLogout } from './actions/userActions';

export default class Stocky extends Component {

  renderScene (route, navigator) {
    switch (route.id) {
      case 'Auth':
<<<<<<< HEAD
        // return <AuthScene navigator={ navigator }/>;
=======
        return <AuthScene navigator={ navigator }/>;
      case 'UserIndex':
>>>>>>> 319e751a87513dabef757218f4ccd1008ed54f5c
        return <UserIndex navigator={ navigator }/>;
      default:
        return <Text>Logged in</Text>;
    }
  }

  handleLogout () {

  }

  render() {
    const store = configureStore();

    const routes = [
      {id: 'Auth', index: 0, title: 'Login'},
      {id: 'UserIndex', index: 1, title: 'My info'}
    ];

    return (
      <Provider store={ store }>
        <Navigator
          style={{ flex: 1 }}
          initialRoute={ routes[0] }
          renderScene={ this.renderScene }
          initialRouteStack={ routes }
          navigationBar={
           <Navigator.NavigationBar
             routeMapper={{
               LeftButton: (route, navigator, index, navState) =>
                {
                  if (route.index === 0) {
                    return null;
                  } else if (route.index === 1) {
                    return (
                      <TouchableHighlight onPress={() => {
                          LoginManager.logOut();
                          store.dispatch(requestLogout());
                          navigator.pop();
                        }}>
                        <Text>Log out</Text>
                      </TouchableHighlight>
                    );
                  } else {
                    return (
                      <TouchableHighlight onPress={() => navigator.pop()}>
                        <Text>Back</Text>
                      </TouchableHighlight>
                    );
                  }
                },
               RightButton: (route, navigator, index, navState) =>
                 { return null; },
               Title: (route, navigator, index, navState) =>
                 { return (<Text>{route.title}</Text>); }
             }}
             style={{backgroundColor: 'gray'}}
           />
          } />
      </Provider>
    );
  }
}
