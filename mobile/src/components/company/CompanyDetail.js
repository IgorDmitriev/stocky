import React from 'react';
import { View,
         Text,
         StyleSheet,
         Modal,
         TouchableHighlight} from 'react-native';

import Chart from 'react-native-chart';
import TransactionModalForm from './transactionModalForm.js';

//TODO: Make Transaction form and add it to the MODAL

class CompanyDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
              modalVisible: false,
              modalVisible2: false };

    this.setModalVisible = this.setModalVisible.bind(this);
    this.setModalVisible2 = this.setModalVisible2.bind(this);
  }

  componentDidMount() {
    this.props.fetchCompany(this.props.companyId);
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  setModalVisible2(visible) {
    this.setState({modalVisible2: visible});
  }

  render() {
    return (
      <View style={{marginTop:100}}>
        <View style={{height:200, alignItems:'center', justifyContent: 'flex-start'}}>
          <Chart
             style={{width: 300}}
             dataPointRadius={0}
             lineWidth={2}
             gridColor={'#DDD'}
             tightBounds={true}
             data={this.props.company.history}
             verticalGridStep={4}
             horizontalGridStep={3}
             type="line"
             showDataPoint={true}
             color={'green'}
          />
        </View>
        <Text>{this.props.company.name}</Text>
        <Text>${this.props.company.price}</Text>
        <Text>{this.props.company.symbol}</Text>
        <Text>{this.props.company.price_percent_change}%</Text>

        <TouchableHighlight onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Buy</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => {
            this.setModalVisible2(true);
          }}>
          <Text>Sell</Text>
        </TouchableHighlight>

      <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible(false)}
          >

          <TransactionModalForm company={this.props.company} setModalVisible={this.setModalVisible} action='buy'/>

      </Modal>

      <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible2}
          onRequestClose={() => this.setModalVisible2(false)}
          >

          <TransactionModalForm company={this.props.company} setModalVisible={this.setModalVisible2} action='sell'/>

      </Modal>


    </View>
    );
  }
}

export default CompanyDetail;
