import React from 'react';
import { StyleSheet,
         View,
         Text } from 'react-native';

import UserHistoryContainer from './UserHistoryContainer';
import StockListContainer from '../stock/StockListContainer';

const styles = StyleSheet.create({
    container: {
        marginTop: 190,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    }
});

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
   }

   render() {
     return (
       <View style={styles.container}>
        <UserHistoryContainer/>
        <StockListContainer navigator={this.props.navigator}/>
       </View>
     );
   }
}

export default UserIndex;
