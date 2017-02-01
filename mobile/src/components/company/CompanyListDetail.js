import React { Component } from 'react';
import { View,
         Text,
         StyleSheet,
         Modal,
         TouchableHighlight} from 'react-native';

//TODO: Make Transaction form and add it to the MODAL

class CompanyListDetail extends React.Component {
  constructor(props) {
    super(props);
    state = { modalVisible: false }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View>
        <Text>{this.company.name}</Text>
        <Text>${this.company.price}</Text>
        <Text>{this.company.symbol}</Text>
        <Text>{this.company.price_percent_change}%</Text>
      </View>

      <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >


      </Modal>

      <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
      }}>
        <Text>Buy/Sell</Text>
      </TouchableHighlight>

    );
  }
}

export default CompanyListDetail;
