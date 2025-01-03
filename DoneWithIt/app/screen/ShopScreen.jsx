import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

function ShopScreen(props) {
    return (
        
 <View  style={styles.background} >
   
    <View style={styles.tick}/>
    <View style={ styles.cros}/>

    
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
        backgroundColor:'yellow',
        width:50,
        height:50,
  position: 'absolute',
 top:40,
 left:30
    },
    cros:{
        backgroundColor:'red',
        width:50,
        height:50,
        position:'absolute',
        top:40,
       right:30
      
    }
})

export default ShopScreen;