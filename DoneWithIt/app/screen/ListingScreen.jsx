import React from 'react';
import {Text, View,StyleSheet,Image } from 'react-native';
import ListItem from '../components/ListItem';

function ListingScreen({route}) {
    const listing= route.params
    return (
     <View>
        <Image style={styles.img} source={listing.images[0]} />
<View style={styles.info}>
    <Text style={styles.title}>{listing.name}</Text>
    <Text style={styles.subTitle}>{listing.price}</Text>
</View>
<View >
    <ListItem image={require('../assets/image.png')} title={'Shadiyana.pk'} subtitle={"Hall Services"}/>
</View>
     </View>
    );
}
const styles = StyleSheet.create({
    img:{
        width:"100%",
        height:200,
    },
    info:{
        padding:10,
      
    },
    title:{
       fontSize: 20,
       fontWeight:"600",
       marginVertical:10,
        
    },
    subTitle:{
      
        fontWeight:"500",
        color:'purple'
    },
  

    
})
export default ListingScreen;