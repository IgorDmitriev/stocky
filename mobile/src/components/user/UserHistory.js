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
    height: 200,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});

class UserHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [[0,0]]
    };
  }

  componentDidMount() {
    this.props.fetchHistory().then(resp => {
      this.setState({
        history: this.props.history.map(hist => {
         return [hist.date, hist.money];
        })
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Total Worth</Text>
        <Chart
           style={styles.chart}
           dataPointRadius={0}
           lineWidth={2}
           gridColor={'#DDD'}
           data={this.state.history}
           yAxisTransform={data => `${parseInt(data / 1000)}K`}
           yAxisWidth={35}
           type="line"
           showDataPoint={true}
           color={'green'}
        />
      </View>
    );
  }
}

export default UserHistory;
