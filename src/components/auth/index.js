import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import AuthForm from './authForm';
import AuthLogo from './authLogo';
export class AuthComponent extends Component {
  state = {
    loading: false,
  };
  goNext = ()=>{
    this.props.navigation.navigate('TabStack')
  }
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size={'large'} />
        </View>
      );
    } else {
      return (
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentScrollView}>
          <View>
            <AuthLogo />
            <AuthForm goNext = {this.goNext}/>
          </View>
        </ScrollView>
      );
    }
  }
}

export default AuthComponent;
const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#1D428a',
    padding: 50,
  },
  contentScrollView: {
  },
});
