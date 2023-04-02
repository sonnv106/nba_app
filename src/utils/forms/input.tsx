import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, TextInputProps} from 'react-native';

const input = (props: TextInputProps | any)  => {
  let template = null;
  switch (props.type) {
    case 'textinput':
      template = <TextInput {...props} style={[styles.input, props.overideStyle]}/>;
      break;
    default:
      return template;
  }
  return template;
};
export default input;
const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    fontSize: 16,
    padding: 5,
    marginTop: 10
  }
})
