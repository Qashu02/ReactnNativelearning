import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import ListingHalls from "../screen/ListingHalls";
import ListingScreen from "../screen/ListingScreen";
import AccountScreen from "../screen/AccountScreen";
import MessagesScreen from "../screen/MessagesScreen";

const Stack=createStackNavigator()

const AccountNavigator=()=>{
    return<>
    <Stack.Navigator screenOptions={{headerShown:false}} mode='modal' >
        <Stack.Screen name='Accounts' component={AccountScreen}/>
        <Stack.Screen name="Messages" component={MessagesScreen}/>
    
    </Stack.Navigator>
    </>
}

export default AccountNavigator;