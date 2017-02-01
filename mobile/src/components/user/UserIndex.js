import React from 'react';
import { StyleSheet,
         View,
         Text,
         ListView } from 'react-native';

import StockListItem from '../stock/StockListItem';
import Chart from 'react-native-chart';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    chart: {
        width: 300,
        height: 100
    },
});
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
     const data = [
          [0, 1],
          [1, 3],
          [3, 7],
          [4, 9],
          [5, 1],
          [6, 3],
          [7, 7],
          [8, 9],
      ];

     return (
       <View style={styles.container}>
         <Chart
              style={styles.chart}
              data={data}
              type="line"
              showDataPoint={true}
              showGrid={false}
              lineWidth={5}
              color={'#666'}
              tightBounds={true}
           />
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <StockListItem stock={rowData}/>}
          />
       </View>
     );
   }
}

export default UserIndex;
