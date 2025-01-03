import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

function ShopScreen(props) {
    return (
        
 <View >
    <View style={styles.navContainer}>
    <View style={styles.tick}/>
    <View style={ styles.cros}/>

    </View>
    <Image style={{width: 380, height:400}}  source={require('../assets/image.png')} />
 </View>
    );
}

const styles = StyleSheet.create({
    navContainer:{
        bottom:70,
        right:30,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    tick:{
        backgroundColor:'yellow',
        width:30,
        height:30,
        right:-60
    },
    cros:{
        backgroundColor:'red',
        width:30,
        height:30,
    }
})

export default ShopScreen;