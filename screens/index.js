import { Navigation } from 'react-native-navigation';
import SecondScreen from '../src/SecondScreen';

export function registerScreens() {
  Navigation.registerComponent('navigation.SecondScreen', () => SecondScreen);
}
