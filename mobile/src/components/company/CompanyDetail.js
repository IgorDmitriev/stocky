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
    // console.warn(this.props.companyId);
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
      <View style={styles.view}>
        <View style={styles.info}>
          <Text style={styles.text}>{this.props.company.name}</Text>
          <Text style={styles.text}>${this.props.company.price}</Text>
          <Text style={styles.text}>{this.props.company.symbol}</Text>
          <Text style={styles.text}>{this.props.company.price_percent_change}%</Text>
        </View>

        <View style={styles.buttons}>
            <TouchableHighlight onPress={() => {
                this.setModalVisible(true)
              }}>
              <Text style={styles.button}>Buy</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => {
                this.setModalVisible2(true)
              }}>
              <Text style={styles.button}>Sell</Text>
            </TouchableHighlight>
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
            createTransaction={this.createTransaction}
            action='sell'/>

      </Modal>


    </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    margin:100,
    marginTop: 250
  },
  info: {
    marginTop: 100,
  },
  text: {
    fontSize: 20
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20
  },
  button: {
    color: '#00BFFF',
    margin: 20,
    fontSize: 18,
    borderWidth: 1,
  }
})

export default CompanyDetail;
