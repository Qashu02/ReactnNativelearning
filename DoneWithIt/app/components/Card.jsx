import React from 'react';
import { View,StyleSheet ,Image,Text, TouchableOpacity} from 'react-native';
import AppText from './AppText';

function Card({title,image,subtitle}) {
    return (
        <View style={styles.container}>

<TouchableOpacity style={styles.card}

>

        <Image style={styles.img} source={image}/>
        <View style={styles.cardInfo}>
       <Text style={styles.heading}>{title}</Text>
       <Text style={{color:"purple"}}>{subtitle}</Text>

        </View>
</TouchableOpacity>
    </View>
 
    );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:"F0F0D7",

  }  
    ,
    card:{


        height:210,
        marginTop:100,
        marginHorizontal:30,
       
        backgroundColor:'white',
        marginBottom:20,
        borderRadius:25,
        overflow:'hidden',
        shadowColor:'black',
        shadowRadius:10,
        elevation:30,
   
      
    }
    ,img:{
        width:'100%'
    },
    cardInfo:{
paddingLeft:10
    },
    heading:{
        fontSize:20,
        fontWeight:'bold',
        textTransform:'capitalize'
    }
   
    
})
export default Card;