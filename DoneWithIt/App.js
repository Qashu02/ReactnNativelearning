import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, Platform, TouchableHighlight, Alert, TouchableOpacity, View, Button, SafeAreaView, Switch } from 'react-native';
import Screen from './app/components/Screen';
import { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import AppImage from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import ListingEditScreen from './app/screen/ListingEditScreen';
 
export default function App() {
  return<>

    <ListingEditScreen/>
  
  </>
   
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
