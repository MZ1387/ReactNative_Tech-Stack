import React, { Component } from 'react';
import {
  Text,
  View,
  LayoutAnimation,
  TouchableWithoutFeedback
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { selectLibrary } from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription = () => {
    const { library, expanded } = this.props;
    const { description } = library;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            {description}
          </Text>
        </CardSection>
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

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
}

export default connect(mapStateToProps)(ListItem);
