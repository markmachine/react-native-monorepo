import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import entities from 'entities';
import style from './style';

const TKText = ({children, style: additionalStyle, html, ...rest}) => {
  if (!children) return null;

  return (
    <Text style={[style.container, additionalStyle]} {...rest}>
      A: {html ? entities.decodeHTML(children) : children}
    </Text>
  );
};

TKText.defaultProps = {
  style: {},
  html: false,
};

TKText.propTypes = {
  children: PropTypes.node,
  html: PropTypes.bool,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array,
  ]),
};

export default TKText;
