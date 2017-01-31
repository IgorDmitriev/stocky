import React from 'react';
import { StyleSheet,
         View,
         Text,
         ListView } from 'react-native';

import StockListItem from '../stock/StockListItem';

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      // this array will be filled with the stock objects that the user own
      dataSource: ds.cloneWithRows(['stock 1',
                                    'stock 2',
                                    'stock 3',
                                    'stock 4']),
    };
   }

   render() {
     return (
       <View>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <StockListItem stock={rowData}/>}
          />
       </View>
     );
   }
}

export default UserIndex;
