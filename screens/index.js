import { Navigation } from 'react-native-navigation';
import SecondScreen from '../src/SecondScreen';
import Welcome from '../src/Welcome';

export function registerScreens() {
  Navigation.registerComponent('navigation.Welcome', () => Welcome);
  Navigation.registerComponent('navigation.SecondScreen', () => SecondScreen);
}
