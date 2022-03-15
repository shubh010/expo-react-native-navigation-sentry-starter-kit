import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import Main from "./navigation/Main";

export default function MyApp() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}
