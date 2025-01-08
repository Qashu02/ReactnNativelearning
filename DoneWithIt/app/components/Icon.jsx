import React from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { View, StyleSheet } from 'react-native';
function Icon({size=50, name,color='white', backgroundColor='black'}) {
    return (
        <View style={{width:size,
            height:size,
        backgroundColor,
        borderRadius:size/2,
       justifyContent:'center',
       alignItems:'center'
        }}>
        <MaterialCommunityIcons size={size*0.75}  name={name} color={color} />
        </View>
    );
}


export default Icon;