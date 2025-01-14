import React from 'react';
import { TextInput, View,StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from './Screen';
import colors from '../config/colors';
function AppTextInput({name,width='100%',style , ...otherprops}) {
    return (
   <Screen>
<View style={[styles.container, {width}, style]}> 
    <MaterialCommunityIcons style={styles.icon} name={name} size={20} color={colors.medium}/>
        <TextInput style={styles.text} {...otherprops}/> 
    </View>
   </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.light,
        borderRadius:25,
        paddingHorizontal:15,
        flexDirection:'row',
      alignItems:'center',
 
    },
    text:{
        fontSize:16
    },
    icon:{

    }
})
export default AppTextInput;