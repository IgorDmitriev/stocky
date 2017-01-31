import { LoginButton, AccessToken } from 'react-native-fbsdk';
import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <View>
        <LoginButton
          style={styles.button}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => this.props.login(data)
                );
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 50
  }
});

export default Login;
