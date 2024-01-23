import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const IconsButton = ({ color, icons, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icons} size={24} color={color} />
    </Pressable>
  );
};

export default IconsButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.35,
  },
});
