import React, { useState } from 'react';
import { View,StyleSheet, Image } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
function LogoScreen(props) {
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    return (
    <Screen >

    <Image style={styles.logo} source={require('../assets/favicon.png')} />
<AppTextInput name={'email'}
placeholder='EnterEmail'
autoCapitalize='none'
onChangeText={Text=> setEmail(Text)}
autoCorrect={false}
keyboardType= 'email-address'/>

<AppTextInput name={'lock'}
placeholder='Enter Pass'
onChangeText={Text=>setPassword(Text)}
autoCapitalize='none'
autoCorrect={false}
keyboardType= 'numeric'
secureTextEntry/>
<Screen>

<AppButton title={'login'} onPress={()=>console.log(email,password)}/>
</Screen>
    </Screen>
    );
}
const styles = StyleSheet.create({
  logo:{
width:80,
height:80,
alignSelf:'center',
margin:50
    }
})

export default LogoScreen;