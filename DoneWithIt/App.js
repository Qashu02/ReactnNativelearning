import React, { useEffect, useState } from 'react';
import { View , StyleSheet,Text} from 'react-native';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import AppNavigator from './app/Navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import OfflineNotice from './app/components/OfflineNotice';
import AuthNavigation from './app/Navigation/AuthNavigation';
import AuthContext from './app/auth/context';
import { jwtDecode } from 'jwt-decode';
import AuthStorage from './app/auth/storage';
import {AppLoading} from 'expo'
export default function App() {
const [user,setUser]=useState()
const [isReady , isSetReady]=useState(false)
const restoreToken= async ()=>{
  try {
    const user=await AuthStorage.getUser()
   if(user) setUser(user)
    
  } catch (error) {
    console.log(error)
  }
  finally{
    isSetReady(true)
  }
}
useEffect(()=>
restoreToken(),[])
if(!isReady){

  return (
<View style={styles.container}>
  <Text >Loading..</Text>
</View>)
}

  return (
    <AuthContext.Provider value={{user,setUser}} >
    
    <OfflineNotice/>
    <NavigationContainer>
      {user?<AppNavigator/>:<AuthNavigation/>}
    </NavigationContainer>  
    </ AuthContext.Provider >
  );

}

const styles = StyleSheet.create({
  container:{
  justifyContent:'center',
  alignItems:'center',
  flex:1
  }
})

