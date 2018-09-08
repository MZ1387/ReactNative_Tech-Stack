import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { selectLibrary } from '../actions';

class ListItem extends Component {
  render() {
    const { dispatch, library: { id, title } } = this.props;
    const { titleStyle } = styles;

    return (
      <TouchableWithoutFeedback
        onPress={() => dispatch(selectLibrary(id))}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default connect()(ListItem);
