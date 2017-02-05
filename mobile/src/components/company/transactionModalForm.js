import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button
 } from 'react-native';



class TransactionModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: '',
      company_id: this.props.company.id,
      price: this.props.company.price,
      stock_count: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let number = this.props.action === 'buy' ? '' : '-';
    const transaction = {
      ...this.state,
      stock_count: number.concat(this.state.stock_count)
    };
    this.props.createTransaction(transaction)
      .then(() => this.props.setModalVisible(false));
  }

  render() {

    return (
      <View style={{marginTop:100}}>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(stock_count) => this.setState({stock_count})}
        value={this.state.stock_count}
        />

        <Button
        onPress={this.handleSubmit.bind(this)}
        title="Submit"
        color="#841584"
        accessibilityLabel="Make Transaction"
        />
        <Button
        onPress={() => this.props.setModalVisible(false)}
        title="Cancel"
        color="#841584"
        accessibilityLabel="Cancel"
        />

      </View>
    );
  }

}

export default TransactionModalForm;
