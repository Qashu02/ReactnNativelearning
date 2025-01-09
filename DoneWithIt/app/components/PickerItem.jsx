import React from 'react';
import { View,StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import AppText from './AppText';
function PickerItem({name, onPress}) {
    return (

<TouchableOpacity style={styles.container} onPress={onPress}>
    <AppText> {name}</AppText>
</TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container:{
        marginVertical:10
    }
})
export default PickerItem;