import React from 'react';
import { View,StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
function ActivityIndicator({visible = false}) {
    if(!visible) return null;
    return <LottieView source={require('../assets/animations/loader.json')}
    autoPlay={true}
    loop={true}/>
    
    
    
   
}
const styles = StyleSheet.create({
    container:{
        flex: 1, // Allows the View to expand to available space
        justifyContent: 'center', // Centers content vertically
        alignItems: 'center', // Centers content horizontally
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
})
export default ActivityIndicator;