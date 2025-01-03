import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, Platform, TouchableHighlight, Alert, TouchableOpacity, View , Button, SafeAreaView} from 'react-native';
import WelcomeScreen from './app/screen/WelcomeScreen';
import ShopScreen from './app/screen/ShopScreen';

export default function App() {
 
  return <ShopScreen/>
 
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
});
