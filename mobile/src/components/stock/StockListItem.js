import React from 'react';
import { View,
         Text,
         StyleSheet } from 'react-native';

class StockListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.stock
    };
  }

  render() {
    return (
      <View>
        <Text>{this.state.name}</Text>
      </View>
    );
  }
}

export default StockListItem;
