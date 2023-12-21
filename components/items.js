import { StyleSheet, View, Text, Pressable } from "react-native"


export default function GoalItem({ goal, deleteItem }) {
  //bind is bit extra, arrow function would do
  return (

    <View key={goal.key} style={styles.individualGoals}>
      <Pressable onPress={deleteItem.bind(this, goal.key)} android_ripple={{ color: "pink" }}>
        <Text style={{ color: 'white', padding: 4, borderRadius: 10, }} > {goal.text} </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  individualGoals: {
    backgroundColor: "blue",
    fontSize: 20,
    color: "white",

    marginBottom: 2,
    minWidth: 100,
    borderRadius: 10,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "lightblue",
    //rounded corners will be missing on iOS
    //we would have to wrap our text into view and add the styles to the view and make text into nested element
    //then we would have to add style eg color to the text separately (NO cascading style inheritence)
  },
})