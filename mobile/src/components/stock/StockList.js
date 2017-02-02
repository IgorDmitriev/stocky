import React from 'react';
import { View,
         Text,
         ListView } from 'react-native';
class StockList extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      // this array will be filled with the stock objects that the user own
      stocks: ds.cloneWithRows(props.stocks),
    };
  }

  componentDidMount() {
    this.props.fetchUsersStocks();
  }

  render() {
    return(
      <View>
        <Text>Stocks Owned</Text>
        <ListView
          dataSource={this.state.stocks}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

export default StockList;
