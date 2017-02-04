import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage
} from 'react-native';

import Login from './Login';

class AuthScene extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount () {
    this.getToken();
  }

  async getToken() {
    try {
      const value = await AsyncStorage.getItem('sessionToken');
      if (value !== null){
        this.props.navigator.push(  {id: 'UserIndex', index: 1, title: 'My Info'});
      } else {
        console.warn('No session token');
      }
    } catch (error) {
      console.warn('Error when getting session token');
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Welcome { this.props.currentUser.fullName }</Text>
        <Login login={ this.props.login } navigator={ this.props.navigator }/>
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

export default AuthScene;
