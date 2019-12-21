/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default () => {
  const [initial, setInitial] = useState({
    displayValue: '0',
    values: [],
    operation: '',
  });
  const addDigit = digit => {
    if (initial.displayValue === '0') {
      setInitial({
        ...initial,
        displayValue: digit,
        values: [digit],
      });
      return;
    }

    if (initial.operation) {
      setInitial({
        ...initial,
        displayValue: `${initial.displayValue}${digit}`,
        values: [initial.values[0], `${initial.displayValue}${digit}`],
      });
      return;
    }

    setInitial({
      ...initial,
      displayValue: `${initial.displayValue}${digit}`,
      values: [`${initial.displayValue}${digit}`],
    });
  };
  const result = () => {
    if (initial.values.length === 2) {
      // eslint-disable-next-line no-eval
      const resultOperation = eval(
        `${initial.values[0]}${initial.operation}${initial.values[1]}`,
      );
      setInitial({
        ...initial,
        displayValue: resultOperation,
        values: [resultOperation],
        operation: '',
      });
    }
  };
  const clearDisplay = () =>
    setInitial({...initial, displayValue: '0', operation: '', values: []});
  const operation = op => {
    if (op === 'AC') {
      clearDisplay();
      return;
    }

    if (op === '.') {
      return;
    }

    if (op === '=') {
      result();
      return;
    }

    setInitial({
      ...initial,
      displayValue: '',
      operation: op,
    });
  };
  const labels = [
    'AC',
    '/',
    7,
    8,
    9,
    '*',
    4,
    5,
    6,
    '-',
    1,
    2,
    3,
    '+',
    0,
    '.',
    '=',
  ];
  return (
    <View style={style.container}>
      <Display value={initial.displayValue} operation={initial.operation} />
      <View style={style.buttons}>
        {labels.map(label => (
          <Button
            label={label}
            key={label}
            _onClick={isNaN(label) ? operation : addDigit}
            tripleWidth={label === 'AC'}
            doubleWidth={label === 0}
            operationButton={isNaN(label)}
          />
        ))}
      </View>
    </View>
  );
};
