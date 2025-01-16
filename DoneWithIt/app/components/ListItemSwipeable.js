import React from 'react';
import { View,StyleSheet } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import GestureHandlerRootView from 'react-native-gesture-handler';
import ListItem from './ListItem';
function ListItemSwipeable(props) {
    return (
  <GestureHandlerRootView>
  <Swipeable renderRightActions={
    renderRightActions}>
    <ListItem/>
  </Swipeable>
    </GestureHandlerRootView>

 
    );
}
const styles = StyleSheet.create({
    container:{

    }
})
export default ListItemSwipeable;