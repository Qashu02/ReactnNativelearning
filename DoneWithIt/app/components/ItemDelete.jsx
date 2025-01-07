import React from 'react';
import { View, StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
function ItemDelete({onPress}) {
    return (
    <View style={styles.container}>
<MaterialCommunityIcons name='trash-can' size={35} color={'white'} onPress={onPress}/>
    </View>
    );
}
const styles = StyleSheet.create({
    container:{backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    }
    
})

export default ItemDelete;