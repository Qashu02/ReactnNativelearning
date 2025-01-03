import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, Platform, TouchableHighlight, Alert, TouchableOpacity, View , Button, SafeAreaView} from 'react-native';
import WelcomeScreen from './app/screen/WelcomeScreen';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';

export default function App() {
 
  return <>
  
<WelcomeScreen/>
  
  </>
 
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  
  
  
  },
});
