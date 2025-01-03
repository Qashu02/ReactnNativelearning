import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, Platform, TouchableHighlight, Alert, TouchableOpacity, View , Button, SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <Text>React Native is superb easy</Text>
      <TouchableOpacity  onPress={()=> console.log("Now i am working")}>
     
     <Image  source={require("./assets/favicon.png")}/>
     
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
 
   

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS==="android"? StatusBar.currentHeight : 0,
  },
});
