import React from 'react';
import { View,
         StyleSheet,
         Text } from 'react-native';
import Chart from 'react-native-chart';

const styles = StyleSheet.create({
  chart: {
    width: 300,
    marginBottom: 30
  },
  container: {
    height: 200
  }
});

let data = [
        ['1/1', 100],
        ['1/2', 300],
        ['1/3', 200],
        ['1/4', 500],
        ['1/5', 400],
        ['1/6', 500],
        ['1/7', 700],
        ['1/8', 600],
      ];


class UserHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: this.props.history.map(hist => (
        [hist.date, hist.money]
      ))
    };
  }

  componentDidMount() {
    this.props.fetchHistory();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Net Worth</Text>
        <Chart
           style={styles.chart}
           dataPointRadius={0}
           lineWidth={2}
           gridColor={'#DDD'}
           data={data}
           type="line"
           showDataPoint={true}
           color={'green'}
        />
      </View>
    );
  }
}

export default UserHistory;
