import React from 'react';
import { View,StyleSheet } from 'react-native';
import Icon from './Icon';
import AppText from './AppText';
function CategoryItemComponent({item,onPress}) {
    return (
  <View style={styles.container}>
    <Icon backgroundColor={item.backgroundColor} color={item.color} size={80} name={item.icon}/>
    <AppText style={styles.name}>{item.name}</AppText>
     </View>
    );
}
const styles = StyleSheet.create({
    container:{
paddingHorizontal:30,
paddingVertical:15,
width:'33%',
alignItems:'center'
    },
    name:{
textAlign:'center',
fontSize:14
    }
})
export default CategoryItemComponent;