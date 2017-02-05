import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight } from 'react-native';

const CompanySearchListItem =
  ({ company, navigator }) => {
  const backgroundColor = company.price_percent_change < 0 ? 'rgba(241,103,69, 0.2)' : 'rgba(87,190,133, 0.2)'

  return (
    <TouchableHighlight
      onPress={() => navigator.push({
        id: 'CompanyDetail',
        index: 2,
        title: company.name,
        companyId: company.id
      })}>
      <View style={[styles.rowContainer, {backgroundColor}]}>
        <View style={styles.companyDetails}>

          <View>
            <Text style={styles.symbol}>{company.symbol}</Text>
            <Text style={styles.name}>{company.name}</Text>
          </View>

          <View style={styles.numbers}>
            <Text style={styles.price}>{company.price}</Text>
            <Text style={styles.percent}>{company.price_percent_change}</Text>
          </View>

        </View>
        <View style={styles.moreIcon}>
          <Text>></Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5
  },
  companyDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 30
  },
  symbol: {
    fontSize: 20
  },
  name: {
    fontSize: 12
  },
  numbers: {
    width: 70
  },
  price: {
    fontSize: 20
  },
  percent: {
    fontSize: 12
  }
});

export default CompanySearchListItem;
