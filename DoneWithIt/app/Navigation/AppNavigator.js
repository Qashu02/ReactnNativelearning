import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingEditScreen from "../screen/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
import * as Notifications from "expo-notifications";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const pushNotification = async () => {
    try {
      const Permission = await Notifications.requestPermissionsAsync();
     if(!Permission.granted) return;

      // Get Expo push token (For Bare Workflow, use `experienceId` or `projectId`)
      const token = await Notifications.getExpoPushTokenAsync();

      console.log(token);
    } catch (error) {
      console.log("Error in getting notification", error);
    }
  };

  useEffect(() => {
    pushNotification();
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        options={({ navigation }) => ({
          headerShown: false,
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
