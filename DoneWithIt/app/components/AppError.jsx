import React from 'react';
import AppText from './AppText';
import { StyleSheet } from 'react-native';

function AppError({error}) {
    return (
     <AppText style={styles.error}>{error}</AppText>  
    );
}
const styles = StyleSheet.create({
    error:{
        color:'red'
    }
})
export default AppError;