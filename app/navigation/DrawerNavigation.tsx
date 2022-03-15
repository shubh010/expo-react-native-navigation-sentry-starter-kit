import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigation from "./StackNavigation";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="StackNavigation" component={StackNavigation} />
    </Drawer.Navigator>
  );
}
