import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, Platform, TouchableHighlight, Alert, TouchableOpacity, View , Button, SafeAreaView} from 'react-native';
import WelcomeScreen from './app/screen/WelcomeScreen';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
export default function App() {
 
  return <>
  
<Card image={require('./app/assets/Hall1.jpg')

} title='Best Hall'
subtitle='Price $100'/>
  
  </>
 
}

const styles = StyleSheet.create({
  container: {
    flex:1,

    alignItems: 'center',
    justifyContent: 'center',
  
  
  
  },
});
