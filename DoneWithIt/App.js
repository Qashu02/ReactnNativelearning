import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, Platform, TouchableHighlight, Alert, TouchableOpacity, View , Button, SafeAreaView, Switch} from 'react-native';
import LogoScreen from './app/screen/LogoScreen';
import Screen from './app/components/Screen';
import MessagesScreen from './app/screen/MessagesScreen';
import ListingEditScreen from './app/screen/ListingEditScreen';
import { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker'


const RequirePermission= async ()=>{
const {granted}=await ImagePicker.requestCameraPermissionsAsync()
if(!granted) alert("Please To access system you have to ensure permission")
}

export default function App() {
  
useEffect(()=>{
RequirePermission()
},[])
  return <>
<Screen>

<ListingEditScreen/>
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
