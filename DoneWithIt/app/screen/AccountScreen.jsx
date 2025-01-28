import React, { useContext } from 'react';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import {FlatList, View,StyleSheet } from 'react-native';
import Screen from '../components/Screen';

import Icon from '../components/Icon';
import itemSeprator from '../components/itemSeprator';
import AuthContext from '../auth/Context';

const menu=[{
    Title:'Check Inventory',
    icon:{
        name:'format-list-bulleted',
        backgroundColor: 'yellow'
    }},
    {
        Title:'My Messages',
        icon:{
            name:'email',
            backgroundColor: 'red'
        },
targetScreen:'Messages'

}]
function AccountScreen({navigation}) {

   const {user,setUser}= useContext(AuthContext)
    return (
       <Screen style={styles.screen}>

<View style={styles.container}>
           <ListItem title={user.name}
            subTitle={user.email}
            image={require('../assets/Hall1.jpg')}
            />
        </View>
<View style={styles.container}>
<FlatList data={menu}
keyExtractor={(menu)=> menu.Title.toString()}
renderItem={({item})=><ListItem title={item.Title}
ImageComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} size={30}/>} onPress={()=> navigation.navigate(item.targetScreen)}
/>} ItemSeparatorComponent={itemSeprator} />
</View>
<ListItem title={"logout"} ImageComponent={<Icon name={'logout'} backgroundColor='purple' size={30}
/>} onPress={()=>setUser(null)}/>

       </Screen>
    );
}
const styles = StyleSheet.create({
    screen:{
        backgroundColor:'#F7F5EF',
       
    }
    ,
    container:{
marginVertical:20,
    }
})
export default AccountScreen;