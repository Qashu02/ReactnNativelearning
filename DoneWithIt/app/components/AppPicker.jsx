import React, { useState } from 'react';
import { TextInput, View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from './Screen';
import colors from '../config/colors';
import AppText from './AppText';
import PickerItem from './PickerItem';

function AppPicker({ name,items, selectItem,onSelectItem, placeholder, ...otherprops }) {
    const [modalView, setModalView] = useState(false);

    return (
        <Screen>
            <TouchableWithoutFeedback onPress={() => setModalView(true)}>
                <View style={styles.container}>
                    <MaterialCommunityIcons style={styles.icon} name={name} size={20} color={colors.medium} />
                    <AppText style={styles.text}>{ selectItem ? selectItem.name: placeholder}</AppText>
                    <MaterialCommunityIcons name="chevron-down" size={20} color={colors.medium} />
                </View>
            </TouchableWithoutFeedback>

            <Modal visible={modalView} animationType="slide">
                <Screen>
                <Button title="Close" onPress={() => setModalView(false)}
                
                 />
                 <FlatList data={items}
                 keyExtractor={item => item.value.toString()}
                 renderItem={({item})=><PickerItem 
                name={item.name} 
                onPress={()=>{setModalView(false);
                    onSelectItem(item)}
                } {...otherprops}/>}/>
            </Screen>
            </Modal>

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        padding: 15,
        flexDirection: 'row',
        width: '100%',
        marginTop: 10,
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: colors.medium,
        fontWeight: '500',
        flex: 1,
    },
    icon: {},
});

export default AppPicker;
