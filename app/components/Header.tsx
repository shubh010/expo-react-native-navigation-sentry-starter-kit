import { View, Text } from "react-native";
import React, { FC } from "react";

interface HeaderInterface {
  navigation: object;
  route?: object;
  options?: object;
}

export default function Header({
  navigation,
  route,
  options,
}: HeaderInterface) {
  return (
    <View>
      <Text>Header</Text>
    </View>
  );
}
