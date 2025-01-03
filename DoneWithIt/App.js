import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, Platform, TouchableHighlight, Alert, TouchableOpacity, View , Button, SafeAreaView} from 'react-native';
import WelcomeScreen from './app/screen/WelcomeScreen';
import ShopScreen from './app/screen/ShopScreen';

export default function App() {
 
  return <View style={styles.container}>
<ShopScreen/>
  </View>
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  
  },
});
