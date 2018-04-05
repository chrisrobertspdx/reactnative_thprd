import { Navigation } from 'react-native-navigation';
import SecondScreen from '../src/SecondScreen';
import Welcome from '../src/Welcome';
import ModalScreen from '../src/ModalScreen';

export function registerScreens() {
  Navigation.registerComponent('navigation.Welcome', () => Welcome);
  Navigation.registerComponent('navigation.SecondScreen', () => SecondScreen);
  Navigation.registerComponent('navigation.ModalScreen', () => ModalScreen);
}
