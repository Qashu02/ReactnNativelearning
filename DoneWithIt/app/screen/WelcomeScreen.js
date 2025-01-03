import React from 'react';
import { ImageBackground, View , StyleSheet, Button,Text, Image} from 'react-native';

function WelcomeScreen() {
    return (
        <>
      
    <ImageBackground style={styles.background} source={require("../assets/background.jpg")}>
    <View style={styles.Container}>

    <Image style={styles.logo} source={require('../assets/favicon.png')} />
    <Text style={{color:'white'}}>Hi Welcome and Get Married</Text>
    </View>
    
     </ImageBackground>
   
    <View style={styles.login} >
        {/* <Button title='login'/>
        <Button title='Register' /> */}
        
        </View>
        <View style={styles.Register}>

        </View>
        </>
        
    );
}
const styles=StyleSheet.create({
    background :{
        flexDirection:'column',
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        
    },
    login:{
      backgroundColor: 'tomato',
     width:"100%",
     height: 40
    },
    Register:{
        backgroundColor:'blue',
        width:"100%",
        height:40,
    },
    logo:{

alignSelf: 'center'

    },
    Container:{
        position: 'absolute',
        top: 70,
       
       
    }
})
export default WelcomeScreen;

