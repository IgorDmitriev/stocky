import React from 'react';
import { View,
         Text,
         StyleSheet,
         TouchableHighlight
       } from 'react-native';

const StockListItem = ({navigator, stock}) => (
  <TouchableHighlight
    onPress={() => navigator.push({
      id: 'CompanyDetails',
      index: 2,
      title: stock.companyName,
      companyId: stock.companyId
    })}>
    <View>
      <Text>{stock.companyName}</Text>
      <Text>{stock.shares} shares</Text>
    </View>
  </TouchableHighlight>
);

export default StockListItem;
