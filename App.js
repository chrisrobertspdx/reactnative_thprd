/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'navigation.Welcome'
  }
});
