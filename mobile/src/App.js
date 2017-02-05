import React, { Component } from 'react';
import {
  Navigator,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import { Provider } from 'react-redux';
import { LoginManager } from 'react-native-fbsdk';

import configureStore from './store';
import AuthScene from './components/auth/AuthSceneContainer';
import SearchScene from './components/search/SearchSceneContainer';
import UserIndexContainer from './components/user/UserIndexContainer';
import CompanyDetailContainer from './components/company/CompanyDetailContainer';
import { requestLogout, requestUserInfo } from './actions/userActions';
import { requestHistory } from './actions/historyActions';
import { requestUsersStocks } from './actions/stockActions';

export default class Stocky extends Component {
  constructor () {
    super();
    this.store = configureStore();
    this.handleFocusScene = this.handleFocusScene.bind(this);
  }

  renderScene (route, navigator) {
    switch (route.id) {
      case 'Auth':
        return <AuthScene navigator={ navigator }/>;
      case 'UserIndex':
        return <UserIndexContainer navigator={ navigator }/>;
      case 'CompanyDetail':
        return <CompanyDetailContainer navigator={ navigator } companyId={route.companyId} />;
      case 'Search':
        return <SearchScene navigator={ navigator }/>;
      default:
        return <Text>Logged in</Text>;
    }
  }

  handleFocusScene (route) {
    switch (route.id) {
      case 'UserIndex':
        this.store.dispatch(requestUserInfo());
        this.store.dispatch(requestHistory());
        this.store.dispatch(requestUsersStocks());
        break;
      default:
        return null
    }
  }

  render() {
    const store = this.store;

    const routes = [
      {id: 'Auth', index: 0, title: 'Login'},
      {id: 'UserIndex', index: 1, title: 'My Info'},
      {id: 'ComanyDetail', index: 2, title: 'Company'},
      {id: 'Search', index: 3, title: 'Search'}
    ];

    return (
      <Provider store={ store }>
        <Navigator
          style={{flex:1}}
          initialRoute={ routes[0] }
          renderScene={ this.renderScene }
          initialRouteStack={ [routes[0]] }
          onWillFocus={ this.handleFocusScene }
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
                        <Text style={styles.navLeft}>Log out</Text>
                      </TouchableHighlight>
                    );
                  } else {
                    return (
                      <TouchableHighlight onPress={() => navigator.pop()}>
                        <Text style={styles.navLeft}>Back</Text>
                      </TouchableHighlight>
                    );
                  }
                },
               RightButton: (route, navigator, index, navState) =>
                 { if (route.index === 1) {
                   return (
                     <TouchableHighlight onPress={() => {
                         navigator.push({
                           id: 'Search',
                           index: 3,
                           title: 'Search'});
                       }}>
                       <Text style={styles.navRight}>Companies</Text>
                     </TouchableHighlight>
                    );
                  }},
               Title: (route, navigator, index, navState) =>
                 { return (<Text style={styles.navTitle}>{route.title}</Text>); }
             }}
             style={styles.navbar}
           />
          } />
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
    navbar: {
      flex: 1,
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#57BE85'
    },
    navTitle: {
      color: '#243743',
      marginTop: 5,
      fontSize: 20
    },
    navLeft: {
      color: '#243743',
      marginLeft: 10,
      marginTop: 10,
      fontWeight: '500'
    },
    navRight: {
      color: '#243743',
      marginRight: 10,
      marginTop: 10,
      fontWeight: '500'
    }

});
