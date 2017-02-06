import React from 'react';
import {
  View,
  Image,
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
        this.props.navigator.push({id: 'UserIndex', index: 1, title: 'My Info'});
      } else {
        console.warn('No session token');
      }
    } catch (error) {
      console.log(error);
      console.warn('Error when getting session token in AUTH');
    }
  }

  render () {
    return (
      <Image source={require('../../images/authBackground.jpeg')} style={styles.container}>
        <Image source={require('../../images/logo.png')} style={styles.logo} />
        <Login login={ this.props.login } navigator={ this.props.navigator }/>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: null,
    height: null
  },
  logo: {
    width: 250,
    height: 131,
    marginBottom: 200
  }
});

export default AuthScene;
