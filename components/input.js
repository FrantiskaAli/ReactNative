import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native"


export default function GoalInput({ addGoal, textValueHandler, input, modalState, close }) {

  //achievement by Creative Stall from https://thenounproject.com/browse/icons/term/achievement/ title="achievement Icons"(CC BY 3.0)
  return (
    <Modal visible={modalState}
      animationType="fade"
      transparent={true}>
      <View style={styles.inputContainer}>

        <TextInput
          style={styles.textInput}
          placeholder="What's your goal?"
          onChangeText={textValueHandler}
          value={input}
        />
        <View style={styles.buttons}>

          <Button onPress={() => addGoal(input)} title="Add !" color="#0F4111" />
          <Button onPress={close} title="Back" color="#0F4111" />

        </View>
      </View>
    </Modal>)
}

const styles = StyleSheet.create({
  inputContainer: {
    height: 200,
    alignSelf: "center",
    marginTop: 250,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "gray",
    borderRightWidth: 2,
    borderRightColor: "gray",
    marginBottom: 20,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    width: "70%",
    backgroundColor: "#B4E3B6",
    padding: 5,

  },
  buttons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginTop: 20,
  }

})