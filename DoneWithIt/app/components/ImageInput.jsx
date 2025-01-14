import React from 'react';
import { View,StyleSheet, TouchableOpacity,Image, Alert } from 'react-native';
import AppText from './AppText';
import AppTextInput from './AppTextInput';
import {MaterialCommunityIcons  } from '@expo/vector-icons';
import colors from '../config/colors';
import * as ImagePicker from 'expo-image-picker'
import { useEffect } from 'react';
function AppImage({imageUri ,onChangeImage}) {
    const RequirePermission = async () => {
      const { granted } = await ImagePicker.requestCameraPermissionsAsync();
      if (!granted) alert("Please To access the system, you have to grant permission.");
    };
  
    useEffect(() => {
      RequirePermission();
    }, []);
  
    const selectImage = async () => {
      try {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes:ImagePicker.MediaTypeOptions.Images,
          quality:1
        });
        if (!result.canceled && result.assets.length > 0) {
          onChangeImage(result.assets[0].uri); 
        }
      } catch (error) {
        console.log("The error is ", error);
      }
    };
    const handlePress= ()=>{
if(!imageUri) selectImage();
else 
Alert.alert('Delete' , 'Are you sure to delete image?',
  [{text:"Yes", onPress:()=> onChangeImage(null)},{text:'No'}],
  
)
    }
    return (
  <TouchableOpacity style={styles.container} onPress={handlePress}> 
  {

!imageUri && (<MaterialCommunityIcons style={styles.icon} name='camera' size={50} color={colors.medium}/>)
  }
{
imageUri && <Image source={{uri:imageUri}} style={styles.image} />
}

  </TouchableOpacity> );
}
const styles = StyleSheet.create({
    container:{
      width:100,
      height:100,
      borderRadius:15,
      backgroundColor:colors.light,
      alignItems:'center',
      justifyContent:'center',
      overflow:'hidden'
    },
    icon:{
      width:50,
      height:50,
      
    },
   image:{
    width:'100%',
    height:'100%',
   }

})
export default AppImage;