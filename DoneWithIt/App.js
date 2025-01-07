import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, Platform, TouchableHighlight, Alert, TouchableOpacity, View , Button, SafeAreaView} from 'react-native';
import WelcomeScreen from './app/screen/WelcomeScreen';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingScreen from './app/screen/ListingScreen';
import MessagesScreen from './app/screen/MessagesScreen';
import ItemDelete from './app/components/ItemDelete';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function App() {
 
  return <>
   <GestureHandlerRootView style={{ flex: 1 }}>
      {/* Your main app content goes here */}
<MessagesScreen/>
    </GestureHandlerRootView>
  </>
 
}

const styles = StyleSheet.create({
  container: {
    flex:1,

    alignItems: 'center',
    justifyContent: 'center',
  
  
  
  },
});
