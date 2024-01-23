import CategoryGridTitle from "../Components/CategoryGridTitle";
import { CATEGORIES } from "../data/dummy_data";
import { View, Text, FlatList, StyleSheet } from "react-native";

//! this navigation prop provide by the navigator of <Stack.screen name='Meal Categories' c..... />
function CategoryScreen({ navigation }) {

  //*above is main function

  function renderCategoryItem(itemData) {
    //* above one is for handle the data
    function pressHanlder() {
      //* above is use for navigate to differenrt page
      //* what is MealOverview --> its a name we are given to components
      navigation.navigate("MealOverview",{
        categoryId:itemData.item.id
      });
    }

    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHanlder}
        navigation={navigation}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
export default CategoryScreen;
