import React from 'react';
import { View,
         Text,
         StyleSheet,
         TouchableHighlight
       } from 'react-native';

const StockListItem = ({navigator, stock}) => (
  <TouchableHighlight
    onPress={() => navigator.push({
      id: 'CompanyDetail',
      index: 2,
      title: stock.companyName,
      companyId: stock.companyId
    })}>
    <View style={styles.rowContainer}>
      <View style={styles.companyDetails}>

        <View>
          <Text style={styles.symbol}>{stock.companyName}</Text>
        </View>

        <View style={styles.numbers}>
          <Text style={styles.price}>{stock.shares}</Text>
        </View>

      </View>
      <View style={styles.moreIcon}>
        <Text>></Text>
      </View>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 10
  },
  companyDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 30
  },
  symbol: {
    fontSize: 20
  },
  name: {
    fontSize: 12
  },
  numbers: {
    width: 70
  },
  price: {
    fontSize: 20
  },
  percent: {
    fontSize: 12
  }
});


export default StockListItem;
