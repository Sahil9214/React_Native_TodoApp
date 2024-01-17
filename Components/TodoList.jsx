import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Button,
  Modal,
  TextInput,
} from "react-native";

const Todo = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [editedText, setEditedText] = useState("");
  const [editedIndex, setEditedIndex] = useState(null);

  const openEditModal = (index) => {
    setEditedIndex(index);
    setEditedText(props.data[index]);
    setModalVisible(true);
  };

  const closeEditModal = () => {
    setModalVisible(false);
    setEditedText("");
    setEditedIndex(null);
  };

  const saveChanges = () => {
    if (editedIndex !== null && editedText.trim() !== "") {
      props.handleEdit(editedIndex, editedText);
      closeEditModal();
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={props.data.reverse()}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => props.handleDelete(index)}>
            <View style={styles.textDiv}>
              <Text style={styles.tagText}>
                {item}
                {"\n"}
              </Text>
              <Button onPress={() => openEditModal(index)} title={"Edit "} />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
      />

      {/* Modal for Editing */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeEditModal}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Edit Todo</Text>
          <TextInput
            style={styles.Input}
            placeholder="Edit Todo Here"
            onChangeText={(text) => setEditedText(text)}
            value={editedText}
          />
          <Button onPress={saveChanges} title="Save" />
          <Button onPress={closeEditModal} title="Cancel" />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  tagText: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
  },
  textDiv: {
    padding: 12,
    backgroundColor: "red",
    margin: 10,
  },
  container: {
    width: "100%",
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  Input: {
    padding: 12,
    borderRadius: 20,
    marginVertical: 10,
    backgroundColor: "#fff",
    width: 200,
    textAlign: "center",
  },
});

export default Todo;
