import React from 'react';
import { View,StyleSheet, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
function NewListingButton({onPress}) {
    return (
        
  <TouchableOpacity  onPress={onPress}>
    <View style={styles.container}>

<MaterialCommunityIcons name='plus-circle' size={40} color={'white'}/>
    </View>
     </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container:{
width:50,
height:50,
borderRadius:25,
justifyContent:'center',
alignItems:'center',
backgroundColor:'red',
bottom:10,
borderColor:'white',
borderWidth:3,
marginLeft:30
    }
})
export default NewListingButton;