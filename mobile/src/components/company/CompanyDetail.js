import React from 'react';
import { View,
         Text,
         StyleSheet,
         Modal,
         TouchableHighlight} from 'react-native';


import Chart from 'react-native-chart';
import TransactionModalForm from './transactionModalForm.js';
import { MKButton, MKColor } from 'react-native-material-kit';

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
      <View style={{marginTop: 70, flexDirection: 'column'}}>
        <View style={{height:200, alignItems:'center', justifyContent: 'flex-start'}}>
          <Chart
             style={{width: 300, marginBottom: 20}}
             dataPointRadius={0}
             lineWidth={2}
             gridColor={'#DDD'}
             tightBounds={true}
             data={this.props.company.history}
             type={"line"}
             showDataPoint={true}
             fillColor={'rgba(87,190,133, 0.5)'}
             color={'rgba(87,190,133, 1)'}
          />
        </View>

        <View style={styles.infoline}>
          <Text style={styles.lineLabel}>Company Name:</Text>
          <Text style={styles.lineValue}>{this.props.company.name}</Text>
        </View>
        <View style={styles.infoline}>
          <Text style={styles.lineLabel}>Company Symbol:</Text>
          <Text style={styles.lineValue}>{this.props.company.symbol}</Text>
        </View>
        <View style={styles.infoline}>
          <Text style={styles.lineLabel}>Price:</Text>
          <Text style={styles.lineValue}>${this.props.company.price}</Text>
        </View>
        <View style={styles.infoline}>
          <Text style={styles.lineLabel}>Change since Yesterday:</Text>
          <Text style={styles.lineValue}>{this.props.company.price_percent_change}%</Text>
        </View>

        <View style={styles.buttons}>
          <MKButton
            style={{
              width: 100,
              height: 60,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center'}}
            backgroundColor={'rgba(87,190,133, 1)'}
            shadowRadius={1}
            shadowOffset={{width:0, height:1}}
            shadowOpacity={.7}
            shadowColor="black"
            onPress={() => {
                this.setModalVisible(true);
              }}
            >
            <Text pointerEvents="none"
                  style={{color: 'white', fontWeight: 'bold'}}>
              BUY
            </Text>
          </MKButton>

          <MKButton
            style={{
              width: 100,
              height: 60,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center'}}
            backgroundColor={'rgba(87,190,133, 1)'}
            shadowRadius={1}
            shadowOffset={{width:0, height:1}}
            shadowOpacity={.7}
            shadowColor="black"
            onPress={() => {
                this.setModalVisible2(true);
              }}
            >
            <Text pointerEvents="none"
                  style={{color: 'white', fontWeight: 'bold',}}>
              SELL
            </Text>
          </MKButton>

        </View>

      <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible(false)}
          >

          <TransactionModalForm
            company={this.props.company}
            setModalVisible={this.setModalVisible}
            createTransaction={this.props.createTransaction}
            action='buy'/>

      </Modal>

      <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible2}
          onRequestClose={() => this.setModalVisible2(false)}
          >

          <TransactionModalForm
            company={this.props.company}
            setModalVisible={this.setModalVisible2}
            createTransaction={this.props.createTransaction}
            action='sell'/>

      </Modal>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 50
  },
  infoline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    marginRight: 20,
    marginLeft: 20
  },

  lineLabel: {
    fontSize: 14
  },
  lineValue: {
    fontSize: 20
  }
});

export default CompanyDetail;
