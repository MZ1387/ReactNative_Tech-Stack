import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { selectLibrary } from '../actions';

class ListItem extends Component {
  renderDescription = () => {
    const { library, selectedLibraryId } = this.props
    const { id, title, description } = library;

    if (id === selectedLibraryId) {
      return (
        <Text>{description}</Text>
      );
    }
  }

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
          {this.renderDescription()}
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

const mapStateToProps = (state) => {
  const { selectedLibraryId } = state;
  return { selectedLibraryId };
}

export default connect(mapStateToProps)(ListItem);
