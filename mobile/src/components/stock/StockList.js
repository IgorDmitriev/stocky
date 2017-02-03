import React from 'react';
import { View,
         Text,
         ListView } from 'react-native';
import StockListItem from './StockListItem';

class StockList extends React.Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }

  componentDidMount() {
    this.props.fetchUsersStocks().catch(err => console.warn(err));
  }

  render() {
    const stocks = this.ds.cloneWithRows(this.props.stocks);
    return(
      <View>
        <Text>Stocks Owned</Text>
        <ListView
          dataSource={stocks}
          renderRow={(rowData) => <StockListItem navigator={this.props.navigator}
                                                 stock={rowData}/>}
        />
      </View>
    );
  }
}

export default StockList;
