import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

class LibraryList extends Component {
  render() {
    return (
        <View></View>
    );
  }
}

const mapStateToProps = (state) => {
  const { libraries } = state;
  return { libraries };
}

export default connect(mapStateToProps)(LibraryList);
