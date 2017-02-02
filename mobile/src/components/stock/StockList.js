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
      dataSource: ds.cloneWithRows(['stock 1',
                                    'stock 2',
                                    'stock 3',
                                    'stock 4',
                                    'stock 5',
                                    'stock 6',
                                    'stock 7',
                                    'stock 8']),
    };
  }

  render() {
    return(
      <View>
        <Text>Stocks Owned</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

export default StockList;
