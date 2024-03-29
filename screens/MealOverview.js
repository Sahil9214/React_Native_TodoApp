import { View, StyleSheet, Text } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy_data";
import { FlatList } from "react-native";
import MealItem from "../Components/MealItem";

import { useLayoutEffect } from "react";
function MealOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  // i am using useEffect for the tite change in mealoverview Page
  //useLayout work same as useEffect but they make transition smooth
  useLayoutEffect(() => {
    const CategoriesTitle = CATEGORIES.find(
      (catgory) => catgory.id === catId
    ).title;
    navigation.setOptions({ title: CategoriesTitle });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id:item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}
export default MealOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
