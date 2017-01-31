import { LoginButton, AccessToken } from 'react-native-fbsdk';
import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class Login extends React.Component {
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
                  (data) => {
                    fetch('http://localhost:3000/api/login', {
                      method: 'POST',
                      headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        fbAuth: data
                      })
                    })
                      .then((resp) => console.log(resp));
                    // console.log(data);
                    // alert(data.accessToken.toString());
                  }
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
