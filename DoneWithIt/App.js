import React, { useEffect } from 'react';
import { View , StyleSheet,Text} from 'react-native';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import AppNavigator from './app/Navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import OfflineNotice from './app/components/OfflineNotice';
export default function App() {
  const demo= async()=>{
    try {
      await AsyncStorage.setItem('person', JSON.stringify({ id: 2 }));
      const value = await AsyncStorage.getItem('person');
      const person = JSON.parse(value);
      console.log('Person:', person);
    } catch (error) {
       console.error(error);
    }
  }

  useEffect(()=>{
    demo();
  },[]);
  return (
    <>
    
    <OfflineNotice/>
    <NavigationContainer>
       <AppNavigator/>
    </NavigationContainer>  
    </>
  );

}

const styles = StyleSheet.create({
  container:{
  justifyContent:'center',
  alignItems:'center',
  flex:1
  }
})

