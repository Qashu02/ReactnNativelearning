import React from 'react';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import {FlatList, View,StyleSheet } from 'react-native';
import Screen from '../components/Screen';

import Icon from '../components/Icon';
import itemSeprator from '../components/itemSeprator';

const menu=[{
    Title:'Check Inventory',
    icon:{
        name:'format-list-bulleted',
        backgroundColor: 'yellow'
    }},
    {
        Title:'Email us',
        icon:{
            name:'email',
            backgroundColor: 'red'
        },


}]
function AccountScreen(props) {
    return (
       <Screen style={styles.screen}>
<View  style={styles.container}>

           <ListItem title={'Qasim'}
            subTitle={'hafizqasim5566@gmail.com'}
            image={require('../assets/Hall1.jpg')}
            />


        </View>
<View style={styles.container}>
<FlatList data={menu}
keyExtractor={(menu)=> menu.Title.toString()}
renderItem={({item})=><ListItem title={item.Title}
ImageComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} size={30}/>}
/>} ItemSeparatorComponent={itemSeprator} />
</View>
<ListItem title={"logout"} ImageComponent={<Icon name={'logout'} backgroundColor='purple' size={30}/>}/>

       </Screen>
    );
}
const styles = StyleSheet.create({
    screen:{
        backgroundColor:'#F7F5EF',
       flex:1,
       overflow:'hidden'
       
    }
    ,
    container:{
flex:1
    }
})
export default AccountScreen;