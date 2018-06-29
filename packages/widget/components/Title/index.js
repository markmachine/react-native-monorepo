import React from 'react';
import {StyleSheet} from 'react-native';
import Text from '../Text';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingBottom: 15,
  },
});

const Title = ({style, ...rest}) => (
  <Text style={[styles.text, style]} {...rest} />
);

Title.defaultProps = {
  style: {},
};

Title.propTypes = {
  style: Text.propTypes.style,
};

export default Title;
