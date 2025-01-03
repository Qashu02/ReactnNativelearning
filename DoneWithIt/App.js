import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, Platform, TouchableHighlight, Alert, TouchableOpacity, View , Button, SafeAreaView} from 'react-native';
import WelcomeScreen from './app/screen/WelcomeScreen';
import AppText from './app/components/AppText';

export default function App() {
 
  return <>
  
  <SafeAreaView style={styles.container}>

    <AppText>Hello</AppText>
  
  </SafeAreaView>
  
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
