import React from 'react';
import { View,
         Text,
         StyleSheet,
         Modal,
         TouchableHighlight} from 'react-native';
import TransactionModalForm from './transactionModalForm.js'

//TODO: Make Transaction form and add it to the MODAL

class CompanyDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
              modalVisible: false,
              modalVisible2: false }

    this.setModalVisible = this.setModalVisible.bind(this);
    this.setModalVisible2 = this.setModalVisible2.bind(this);
  }

  componentDidMount() {
    console.warn(this.props.companyId);

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
        <Text>{this.props.company.name}</Text>
        <Text>${this.props.company.price}</Text>
        <Text>{this.props.company.symbol}</Text>
        <Text>{this.props.company.price_percent_change}%</Text>

        <TouchableHighlight onPress={() => {
            this.setModalVisible(true)
          }}>
          <Text>Buy</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => {
            this.setModalVisible2(true)
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
