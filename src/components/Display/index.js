import React from 'react';
import {Text, View} from 'react-native';
import style from './style';

export default ({value, operation}) => {
  return (
    <View style={style.display}>
      <View>
        <Text style={style.operation}>{operation}</Text>
      </View>
      <Text style={style.displayValue}>{value}</Text>
    </View>
  );
};
