import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import TodoInput from "./Components/TodoInput";

export default function App() {
  return (
    <View>
      <TodoInput />
    </View>
  );
}

const styles = StyleSheet.create({});
