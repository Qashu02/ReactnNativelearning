import React from 'react';
import { ImageBackground, View , StyleSheet, Button,Text, Image} from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AuthNavigation from '../Navigation/AuthNavigation';
function WelcomeScreen({navigation}) {
    return (
        <>
      
    <ImageBackground blurRadius={5} style={styles.background} source={require("../assets/background.jpg")}>
    <View style={styles.Container}>

    <Image style={styles.logo} source={require('../assets/favicon.png')} />
    <AppText style={{color:'white'}}> Hi Welcome and Marry Early!</AppText>
    </View>
    
   
   <View style={styles.btnContainer}>

      <AppButton title={'login'} onPress={()=> navigation.navigate("Login")}/> 
       <AppButton title={"Register"}style={{backgroundColor:'purple'} }  onPress={()=> navigation.navigate("Register")} />
        
   </View>
     </ImageBackground>
        </>
        
    );
}
const styles=StyleSheet.create({
    background :{
        flexDirection:'column',
        flex:1,
      
        alignItems:'center',
        
    },
 
    logo:{

alignSelf: 'center'

    },
    Container:{
        position: 'absolute',
        top: 70,
       
       
    }
    
    ,btnContainer:{
        flexDirection:'column',
        width:'100%',
        position:'absolute',
        bottom:10,
        marginVertical:10,
        gap:20,
        padding:15
      
    }
    ,
})
export default WelcomeScreen;

