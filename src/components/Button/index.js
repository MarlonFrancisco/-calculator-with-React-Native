import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import style from './style';

export default ({
  _onClick,
  label,
  tripleWidth,
  doubleWidth,
  operationButton,
}) => {
  const styleButton = [style.button];

  if (tripleWidth) {
    styleButton.push(style.buttonTriple);
  } else if (doubleWidth) {
    styleButton.push(style.buttonDouble);
  }

  if (operationButton) {
    styleButton.push(style.operationButton);
  }

  return (
    <TouchableHighlight onPress={() => _onClick(label)}>
      <Text style={styleButton}>{label}</Text>
    </TouchableHighlight>
  );
};
