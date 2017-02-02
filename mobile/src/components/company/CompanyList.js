import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native';
import CompanyListDetail from './CompanyListDetail.js'

class CompanyList extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <ListView>
        { this.props.companies.map(company => <CompanyListDetail key={company.id} company={company} currentUser={this.props.currentUser}/>) }
      </ListView>
    );
  }
}

export default CompanyList;
