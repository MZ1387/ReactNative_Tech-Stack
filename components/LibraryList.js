import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem = (library) => {

    return <ListItem library={library.item} />;
  }

  render() {
    const { libraries } = this.props;
    return (
        <FlatList
          data={libraries}
          renderItem={this.renderItem}
          keyExtractor={(library) => library.index}
        />
    );
  }
}

const mapStateToProps = (state) => {
  const { libraries } = state;
  return { libraries };
}

export default connect(mapStateToProps)(LibraryList);
