import React from "react";
import { Platform } from "react-native";
import {
  HeaderButton,
  HeaderButtonProps,
} from "react-navigation-header-buttons";
import Ionicons from "@expo/vector-icons/Ionicons";
import themes from "../../global/styles/themes";

const CustomHeaderButton = (
  props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<HeaderButton> & Readonly<HeaderButtonProps> & Readonly<{ children?: React.ReactNode; }>
) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={
        Platform.OS === "android" ? themes.colors.white : themes.colors.primary
      }
    ></HeaderButton>
  );
};

export default CustomHeaderButton;
