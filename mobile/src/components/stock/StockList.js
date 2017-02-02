import React from 'react';
import { View,
         Text,
         ListView } from 'react-native';
class StockList extends React.Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


  }

  componentDidMount() {
    this.props.fetchUsersStocks();
  }

  render() {
    const stocks = this.ds.cloneWithRows(this.props.stocks);
    return(
      <View>
        <Text>Stocks Owned</Text>
        <ListView
          dataSource={stocks}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

export default StockList;
