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
import SearchScene from './components/search/SearchSceneContainer';
import UserIndex from './components/user/UserIndex';
import CompanyDetailContainer from './components/company/CompanyDetailContainer';
import { requestLogout } from './actions/userActions';

export default class Stocky extends Component {

  renderScene (route, navigator) {
    switch (route.id) {
      case 'Auth':
        return <AuthScene navigator={ navigator }/>;
      case 'UserIndex':
        return <UserIndex navigator={ navigator }/>;

      case 'CompanyList':
<<<<<<< HEAD
        return  <CompanyDetailContainer navigator={ navigator }/>
=======
        return  <CompanyListContainer navigator={ navigator }/>
      case 'Search':
        return <SearchScene navigator={ navigator }/>;
>>>>>>> dda05477a192671014794a49cb639ea2da14ae3b
      default:
        return <Text>Logged in</Text>;
    }
  }

  render() {
    const store = configureStore();

    const routes = [
      {id: 'Auth', index: 0, title: 'Login'},
      {id: 'UserIndex', index: 1, title: 'My info'},
      {id: 'ComanyList', index: 2, title: 'Company'},
      {id: 'Search', index: 3, title: 'Search'}
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
