import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, Platform, TouchableHighlight, Alert, TouchableOpacity, View , Button, SafeAreaView, Switch} from 'react-native';

import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import AccountScreen from './app/screen/AccountScreen';
import Screen from './app/components/Screen';
import ListingScreen from './app/screen/ListingScreen';
import ListingHalls from './app/screen/ListingHalls';
import AppText from './app/components/AppText';
import AppTextInput from './app/components/AppTextInput';
import { useState } from 'react';
import AppPicker from './app/components/AppPicker';
const Category=[{
  value:1, name:'Services'},
  {
    value:2, name:'Menu'},
    {
      value:3, name:'Nearby'},
]
export default function App() {
 const[isOn,setIsOn]=useState(true)

  return <>
 
<AppPicker items={Category} name={'apps'} placeholder={'Category'}/>

<AppTextInput name={'email'} placeholder='EnterEmail'/>
  </>
 
}

const styles = StyleSheet.create({
  container: {
    flex:1,

    alignItems: 'center',
    justifyContent: 'center',
  
  
  
  },
});
