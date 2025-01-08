import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, Platform, TouchableHighlight, Alert, TouchableOpacity, View , Button, SafeAreaView} from 'react-native';

import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import AccountScreen from './app/screen/AccountScreen';
import Screen from './app/components/Screen';
export default function App() {
 
  return <>
  
<Screen style={styles.container}>
  
  <AccountScreen/>
</Screen>
 
  </>
 
}

const styles = StyleSheet.create({
  container: {
    flex:1,

    alignItems: 'center',
    justifyContent: 'center',
  
  
  
  },
});
