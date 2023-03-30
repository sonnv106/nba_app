import React, { Component } from 'react';
import type {PropsWithChildren} from 'react';
import RootNavigator from './routes'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class App extends Component {
  render(): React.ReactNode {
    return (
      <View style = {styles.container}>
        <RootNavigator/>
      </View>
  );
  }
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
})