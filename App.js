import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoryScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealOverviewScreen from "./screens/MealOverview";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavouriteScreen from "./screens/FavouriteScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="MealCategories"
            component={CategoryScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
          <Stack.Screen name="MealOverview" component={MealOverviewScreen} />
          <Stack.Screen name="favourites" component={FavouriteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center", // Center vertically
    alignItems: "center",
  },
});
