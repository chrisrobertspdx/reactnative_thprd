import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';

class ModalScreen extends Component {
  static navigatorButtons = {
    leftButtons: [
      {
        id: 'cancel',
        systemItem: 'cancel'
      }
    ]
  };

  constructor(props) {
    super(props);
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'cancel') {
        Navigation.dismissModal({ animationType: 'slide-down' });
      }
    }
  };

  render() {
    return <View style={{ flex: 1, backgroundColor: 'black' }} />;
  }
}

export default ModalScreen;
