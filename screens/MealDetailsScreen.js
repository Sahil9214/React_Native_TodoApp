import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../data/dummy_data";
import { useLayoutEffect } from "react";
import IconsButton from "../Components/IconsButton";
import { FavouritesContext } from "../Store/Context/favourites-context";

function MealDetailsScreen({ route, navigation }) {
  const favouriteMealCtx = useContext(FavouritesContext);
  const mealIsFavourite = favouriteMealCtx.ids.includes(mealId);
  const mealId = route.params.mealId;

  const selectionMeal = MEALS.find((meal) => meal.id === mealId);

  function handleButtonPresshandler() {

if(mealIsFavourite){
  favouriteMealCtx.removeFavourites(mealId);
}
else{
  favouriteMealCtx.addFavourite(mealId);
}

    navigation.navigate("favourites");
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconsButton
            color={"white"}
            icons={mealIsFavourite ?"star":"star-outline"}
            onPress={handleButtonPresshandler}
          />
        );
      },
    });
  }, [navigation, handleButtonPresshandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectionMeal.imageUrl }} style={styles.IMAGE} />
      <Text style={styles.title}>{selectionMeal.title}</Text>
      <View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{selectionMeal.duration} Min</Text>
          <Text style={styles.detailItem}>
            {" "}
            {selectionMeal.complexity.toUpperCase()}
          </Text>
          <Text style={styles.detailItem}>
            {selectionMeal.affordability.toUpperCase()}
          </Text>
        </View>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Indgridents</Text>
        </View>
        <View>
          {selectionMeal.ingredients.map((ingredients) => (
            <View style={styles.listItem} key={ingredients}>
              <Text style={styles.subText}>{ingredients}</Text>
            </View>
          ))}
        </View>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Steps</Text>
        </View>
        <View>
          {selectionMeal.steps.map((steps) => (
            <View style={styles.listItem} key={steps}>
              <Text style={styles.subText}>{steps}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    color: "#fff",
  },
  IMAGE: {
    width: "100%",
    height: 350,

    justifyContent: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 0,
    textAlign: "center",
    color: "#fff",
  },
  subTitle: {
    color: "#e2b497",
    fontSize: 24,
    fontWeight: "bold",
    padding: 4,
    textAlign: "center",
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
  subTitleContainer: {
    padding: 6,
    margin: 4,

    borderBottomWidth: 2,
    marginHorizontal: 24,
    marginVertical: 4,
  },
  subText: {
    color: "#351401",
    fontSize: 18,
    fontWeight: "bold",
    padding: 4,
    textAlign: "center",
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
    marginVertical: 8,
  },
});
