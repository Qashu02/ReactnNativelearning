import React, { cloneElement } from 'react';
import { View,StyleSheet } from 'react-native';
import AppText from './AppText';
import Constants from 'expo-constants'
import { useNetInfo } from '@react-native-community/netinfo';
function OfflineNotice(props) {
    const netinfo=useNetInfo();

    if(netinfo.type !== 'unknown' && netinfo.isInternetReachable===false)
    return (
  <View style={styles.container}> 
  <AppText style={styles.text}>
    No Internet Connection
  </AppText>
  </View>
    );
    return null
}
const styles = StyleSheet.create({
    container:{
backgroundColor:'red',
justifyContent:'center',
alignItems:'center',
height:50,
width:'100%',
position:'absolute',
top: Constants.statusBarHeight,
zIndex:1,
    },
    text:{
        color:'white'
    }
})
export default OfflineNotice;