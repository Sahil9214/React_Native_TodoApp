import React, { useContext } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { FavouritesContext } from "../Store/Context/favourites-context";
import { MEALS } from "../data/dummy_data";

function FavouriteScreen({ navigate }) {
  const favouriteMealCtx = useContext(FavouritesContext);
  const favouritesMeals = MEALS.filter((meal) =>
    favouriteMealCtx.ids.includes(meal.id)
  );
  console.log(favouriteMealCtx, favouritesMeals);
  return <View></View>;
}

export default FavouriteScreen;
