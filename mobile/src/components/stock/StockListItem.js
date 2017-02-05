import React from 'react';
import { View,
         Text,
         StyleSheet,
         TouchableHighlight
       } from 'react-native';

// const stock = {
//   companyId: 1,
//   companyName: 'Apple Inc.',
//   companySymbol: 'AAPL',
//   price: '812',
//   price_percent_change: '-0.2',
//   shares: '10'
// };

const StockListItem = ({navigator, stock}) => {
  console.log('item');
  console.log(stock);
  const backgroundColor =
    stock.companyPercentChange < 0 ? 'rgba(241,103,69, 0.2)' : 'rgba(87,190,133, 0.2)'

  return (
    <TouchableHighlight
      onPress={() => navigator.push({
        id: 'CompanyDetail',
        index: 2,
        title: stock.companyName,
        companyId: stock.companyId
      })}>
      <View style={[styles.rowContainer, {backgroundColor}]}>
        <View style={styles.companyDetails}>

          <View style={{width: 200}}>
            <Text style={styles.symbol}>{stock.companySymbol}</Text>
            <Text style={styles.name}>{stock.companyName}</Text>
          </View>

          <View style={styles.numbers}>
            <Text style={styles.price}>{stock.companyPrice}</Text>
            <Text style={styles.percent}>{stock.companyPercentChange}</Text>
          </View>

          <View style={styles.share}>
            <Text style={styles.shares}>x {stock.shares}</Text>
          </View>

        </View>
        <View style={styles.moreIcon}>
          <Text>></Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5
  },
  companyDetails: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  symbol: {
    fontSize: 20,
    color: '#243743'
  },
  name: {
    fontSize: 12,
    color: '#243743'
  },
  numbers: {
    width: 50,
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  share: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft: 20
  },
  price: {
    fontSize: 14,
    color: '#243743'
  },
  percent: {
    fontSize: 14,
    color: '#243743'
  },
  shares: {
    fontSize: 20,
    color: '#243743'
  }
});


export default StockListItem;
