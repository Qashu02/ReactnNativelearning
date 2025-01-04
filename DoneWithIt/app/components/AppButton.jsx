import React from 'react';

import { TouchableOpacity,StyleSheet,Text } from 'react-native';
function AppButton({title,onPress ,style}) {
    return (
    <TouchableOpacity style={[styles.loginButton, style]} onPress={onPress} >
<Text style={styles.loginText}> {title} </Text>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    loginButton:{
      backgroundColor:'tomato',
      width:'100%',
        borderRadius:35,
        justifyContent:'center',
        alignItems:'center',
        padding:15,

    }
    ,
    loginText:{
       fontSize:18,
       fontWeight:'bold',
       textTransform:"uppercase", 
       color:'white',
   
    }
})
export default AppButton;