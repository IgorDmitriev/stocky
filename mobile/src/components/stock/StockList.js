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
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={{alignSelf: 'center', color: '#243743', fontSize: 14, marginBottom: 10}}>My Stocks</Text>
        <ListView
          dataSource={stocks}
          enableEmptySections={true}
          renderRow={(rowData) =>
            <StockListItem navigator={this.props.navigator}
                                                 stock={rowData}/>}
        />
      </View>
    );
  }
}

export default StockList;
