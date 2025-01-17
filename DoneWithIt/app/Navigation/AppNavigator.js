import React from "react";

import {createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ListingScreen from "../screen/ListingScreen";
import ListingEditScreen from "../screen/ListingEditScreen";
import AccountScreen from "../screen/AccountScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons} from "@expo/vector-icons"
import NewListingButton from "./NewListingButton";
import colors from "../config/colors";

const Tab =createBottomTabNavigator();
const AppNavigator =()=>{
return<>
<Tab.Navigator>

    <Tab.Screen name="Feed" component={FeedNavigator} options={{tabBarIcon:({size,color})=><MaterialCommunityIcons name="home" color={color} size={size}/>}} />
    <Tab.Screen name="ListingEdit" component={ListingEditScreen }
options={({navigation})=>({
   headerShown:false ,tabBarButton:()=> <NewListingButton  onPress={()=> navigation.navigate('ListingEdit')}
    />,tabBarIcon:({color,size})=><MaterialCommunityIcons name="plus-cirlce"  color={color} size={size}/>

})}  />
    <Tab.Screen name="Account" component={AccountNavigator}  options={{ headerShown:false ,tabBarIcon:({size,color})=><MaterialCommunityIcons name="account" color={color} size={size}/>}} />
</Tab.Navigator>
</>
}

export default AppNavigator;