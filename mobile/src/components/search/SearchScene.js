import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  ListView,
  TextInput
} from 'react-native';
import CompanySearchListItem from './CompanySearchListItem';


class SearchScene extends React.Component {
  constructor (props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      searchText: ''
    };

    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  componentDidMount () {
    this.props.requestCompanies('');
  }

  handleSearchInput (searchText) {
    this.setState({ searchText });
    this.props.setFilter({ searchText });
  }

  render () {

    const dataSource = this.ds.cloneWithRows(this.props.companies);
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for companies"
            autoCorrect={false}
            placeholderTextColor={'#999'}
            onChangeText={ this.handleSearchInput }
          />
        </View>
        <ListView
          dataSource={dataSource}
          enableEmptySections={true}
          renderRow={(rowData) => <CompanySearchListItem company={rowData} navigator={this.props.navigator}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  searchBar: {
    height: 60,
    backgroundColor: '#333',
    padding: 10
  },
  searchInput: {
    height: 40,
    color: '#fff'
  }
});

export default SearchScene;
