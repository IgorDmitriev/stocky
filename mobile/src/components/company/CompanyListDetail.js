import React from 'react';
import { View,
         Text,
         StyleSheet } from 'react-native';

class CompanyListDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>{this.company.name}</Text>
        <Text>${this.company.price}</Text>
        <Text>{this.company.symbol}</Text>
        <Text>{this.company.price_percent_change}%</Text>
      </View>
    );
  }
}

export default CompanyListDetail;
