import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function ShopScreen(props) {
    return (
        
 <View  style={styles.background} >
   
    <View style={styles.tick}> <MaterialCommunityIcons name='check'color={'white'} size={30} /> </View>
    <View style={ styles.cros}> <MaterialCommunityIcons name='close' color={'yellow'} size={30}/> </View>

    
    <Image resizeMode='contain' style={{width: '100%', height:'100%'}}  source={require('../assets/image.png')} />
 </View>
    );
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:'black',
        flex:1,
        
    },
    // navContainer:{
    //     bottom:70,
    //     right:30,
    //     flexDirection: 'row',
    //     justifyContent:'space-between'
    // },
    tick:{
      
       
  position: 'absolute',
 top:40,
 left:30
    },
    cros:{
      
     
        position:'absolute',
        top:40,
       right:30
      
    }
})

export default ShopScreen;