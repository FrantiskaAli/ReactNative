import { StyleSheet, View, TextInput, Button } from "react-native"


export default function GoalInput({addGoal, textValueHandler, input}){
    
    
    return (
    <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="What's your goal?"
          onChangeText={textValueHandler}
          value={input}
        />

        <Button onPress={() => addGoal(input)} title="Add" />

      </View>)
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: "blue",
        marginBottom: 20,
      },
      textInput: {
        borderWidth: 1,
        borderColor: "gray",
        width: "70%",
        paddingVertical: 0,
        paddingHorizontal: 4,
    
    
      },
  })