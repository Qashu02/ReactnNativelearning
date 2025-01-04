import React from 'react';
import { View ,StyleSheet, Image,Text, TouchableOpacity } from 'react-native';

function ListItem({image,title,subtitle}) {
    return (
      <TouchableOpacity style={styles.user}>

           <Image style={styles.img} source={image} />
           <View styl={styles.userInfo}>
            <Text style={styles.userName}>{title}</Text>
            <Text style={styles.userServices}>{subtitle}</Text>
            </View> 
      </TouchableOpacity>
        
    );
}
const styles = StyleSheet.create({
    img:{
      width:70,
      height:70,
      borderRadius:35,
      
        
    },
    user:{
        flexDirection:'row',
        margin:10,
        gap:5,
        textAlign:'center'
        
            },
            // userInfo:{
            //     marginVertical:50,
            // },
        userName:{
            fontSize:18,
             fontWeight:'700',
             
               },
               userServices:{
                color:'tomato',
                fontWeight:'600'
               }
            
})

export default ListItem;