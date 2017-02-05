import React from 'react';
import { View,
         StyleSheet,
         Text } from 'react-native';
import Chart from 'react-native-chart';


const styles = StyleSheet.create({
  chart: {
    width: 340,
    marginBottom: 20
  },
  container: {
    height: 150,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});

class UserHistory extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const { history } = this.props;
    console.log('render history', history);
    return (
      <View style={styles.container}>
        <Text>Total Worth</Text>
        <Chart
           style={styles.chart}
           dataPointRadius={0}
           lineWidth={2}
           gridColor={'#DDD'}
           data={history}
           yAxisTransform={data => `${parseInt(data / 1000)}K`}
           yAxisWidth={35}
           type="line"
           fillColor={'rgba(87,190,133, 0.5)'}
           showDataPoint={true}
           showAxis={true}
           verticalGridStep={4}
           color={'rgba(87,190,133, 1)'}
        />
      </View>
    );
  }
}

export default UserHistory;
