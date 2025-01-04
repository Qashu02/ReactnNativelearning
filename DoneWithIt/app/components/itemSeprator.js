import React from 'react';
import { View,StyleSheet } from 'react-native';
function itemSeprator(props) {
    return (
     <View style={styles.seprator}/>
    );
}
const styles = StyleSheet.create({
    seprator:{
       width:'100%',
       height:1,
       backgroundColor:'brown' 
    }
})
export default itemSeprator;