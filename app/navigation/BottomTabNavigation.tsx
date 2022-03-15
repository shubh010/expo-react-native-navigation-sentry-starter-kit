import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Settings from "../screens/user/Settings";
import Profile from "../screens/user/Profile";
import Home from "../screens/user/Home";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
