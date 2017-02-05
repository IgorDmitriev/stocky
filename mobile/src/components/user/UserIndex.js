import React from 'react';
import { StyleSheet,
         View,
         Text } from 'react-native';

import UserHistoryContainer from './UserHistoryContainer';
import StockListContainer from '../stock/StockListContainer';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      marginTop: 70,
      backgroundColor: 'white'
    },
    userMoney: {
      marginTop: 20,
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    worth: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      fontSize: 12,
      color: '#777',
      fontWeight: '500'
    },
    money: {
      fontSize: 22,
      color: '#243743',
    }
});

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total_worth: props.user.totalWorth,
      cash: props.user.money,
      stock_worth: props.user.stockWorth
    };
  }

  componentDidMount () {
  }

   render() {
     console.log('current user', this.props.user);
     const { money, stockWorth } = this.props.user;
     return (
       <View style={styles.container}>
        <UserHistoryContainer/>
        <View style={styles.userMoney}>
          <View style={styles.worth}>
            <Text style={styles.label}>Cash</Text>
            <Text style={styles.money}>${money}</Text>
          </View>
          <View style={styles.worth}>
            <Text style={styles.label}>Stock Worth</Text>
            <Text style={styles.money}>${stockWorth}</Text>
          </View>
        </View>
        <StockListContainer navigator={this.props.navigator}/>
       </View>
     );
   }
}


export default UserIndex;
