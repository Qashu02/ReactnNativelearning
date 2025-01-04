import React from 'react';
import {Text, View,StyleSheet,Image } from 'react-native';
import ListItem from '../components/ListItem';

function ListingScreen(props) {
    return (
     <View>
        <Image style={styles.img} source={require('../assets/Hall2.jpg')} />
<View style={styles.info}>
    <Text style={styles.title}>Best Hall in the World</Text>
    <Text style={styles.subTitle}>Start from $100</Text>
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