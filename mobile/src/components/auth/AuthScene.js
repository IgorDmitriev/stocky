import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Login from './Login';


class AuthScene extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Welcome { this.props.currentUser.fullName }</Text>
        <Login login={ this.props.login }/>
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
