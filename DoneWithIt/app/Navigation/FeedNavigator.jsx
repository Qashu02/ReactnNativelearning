import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import ListingHalls from "../screen/ListingHalls";
import ListingScreen from "../screen/ListingScreen";

const Stack=createStackNavigator()

const FeedNavigator=()=>{
    return<>
    <Stack.Navigator screenOptions={{headerShown:false}} mode='modal' >
        <Stack.Screen name='ListingHalls' component={ListingHalls}/>
        <Stack.Screen name="Listings" component={ListingScreen}/>
    
    </Stack.Navigator>
    </>
}

export default FeedNavigator;