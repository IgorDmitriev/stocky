import React from 'react';

class TransactionModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUser,
      company_id: this.props.company.id,
      price: this.props.company.price,
      stock_count: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTransaction(this.state).then(() => this.props.setModalVisible(false));
  }

  render() {
    return (
      <View>
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

      </View>
    );
  }

}

export default TransactionModalForm;