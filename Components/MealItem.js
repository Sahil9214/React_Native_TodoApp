import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";

const MealItem = ({
  id,
  title,
  imageUrl,
  complexity,
  affordability,
  duration,
}) => {
  const navigation = useNavigation();
  function selectMealHandler() {
    navigation.navigate("MealDetails", {
      mealId: id,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={selectMealHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.Image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration} Min</Text>
            <Text style={styles.detailItem}> {complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  Image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,

    backgroundColor: "white",
    elevation: 4,
    shadowColor: 4,
    shadowOpacity: 0.45,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.35,
  },
});
