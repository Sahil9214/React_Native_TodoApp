import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import TodoList from "./TodoList";
const logo = {
  uri: "https://reactnative.dev/img/tiny_logo.png",
  width: 64,
  height: 64,
};
const TodoInput = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const handleClick = () => {
    setData([...data, text]);
    setText("");
  };
  //DeleteItem;
  const handleDelete = (index) => {
    // console.log("index",index)
    setData(data.filter((_, i) => i !== index));
  };
  //Edit Request;
  const handleEdit = (index, newText) => {
    const updatedData = [...data];
    updatedData[index] = newText;
    setData(updatedData);
  };
  return (
    <View style={styles.mainDiv}>
      <Text style={styles.mainTextHeading}>Hello We are Making Todo Bar</Text>

      <TextInput
        style={styles.Input}
        placeholder="Add Todo Here"
        onChangeText={(e) => setText(e)}
        value={text}
      />
      <Button onPress={handleClick} title={"press me"} />
      <TodoList
        data={data}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </View>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  mainTextHeading: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  Input: {
    padding: 12,
    borderRadius: 20,
  },
  mainDiv: {
    marginTop: 60,
  },
});
