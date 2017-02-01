import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewList
} from 'react-native';
import CompanyListDetail from './CompanyListDetail.js'

class CompanyList extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <ViewList>
        { this.props.companies.map(company => <CompanyListDetail key={company.id} company={company} currentUser={this.props.currentUser}/> }
      </ViewList>
    );
  }
}

export default CompanyList;
