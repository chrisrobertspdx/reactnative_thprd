import React, { Component } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

export default class App extends Component {
  static navigatorStyle = {
    navBarHidden: true
  };

  pushSecondScreen = () => {
    this.props.navigator.push({
      screen: 'navigation.SecondScreen',
      title: 'Second Screen'
    });
  };

  presentSecondScreen = () => {
    Navigation.showModal({
      screen: 'navigation.ModalScreen',
      title: 'Modal Screen'
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Navigation example!
        </Text>
        <Button title="Push Second Screen" onPress={this.pushSecondScreen} />
        <Button
          title="Present Modal Screen"
          onPress={this.presentSecondScreen}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
