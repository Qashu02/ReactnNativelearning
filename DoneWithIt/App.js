import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/Navigation/AppNavigator';
import ListingEditScreen from './app/screen/ListingEditScreen';
import AuthNavigation from './app/Navigation/AuthNavigation';
import ListingHalls from './app/screen/ListingHalls';

export default function App() {
  return (
    <NavigationContainer>
    <AppNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
