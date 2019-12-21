import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  button: {
    fontSize: 40,
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    textAlign: 'center',
    borderColor: '#888',
  },
  operationButton: {
    backgroundColor: '#33befb',
    color: '#fff',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
});
