import React from "react";

import {createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ListingScreen from "../screen/ListingScreen";
import ListingEditScreen from "../screen/ListingEditScreen";
import AccountScreen from "../screen/AccountScreen";
import FeedNavigator from "./FeedNavigator";

const Tab =createBottomTabNavigator();
const AppNavigator =()=>{
return<>
<Tab.Navigator>

    <Tab.Screen name="Feed" component={FeedNavigator} />
    <Tab.Screen name="ListingEdit" component={ListingEditScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
</Tab.Navigator>
</>
}

export default AppNavigator;