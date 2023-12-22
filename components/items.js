import { StyleSheet, View, Text, Pressable } from "react-native"


export default function GoalItem({ goal, deleteItem }) {
  //bind is bit extra, arrow function would do
  return (

    <View key={goal.key} style={styles.individualGoals}>
      <Pressable onPress={deleteItem.bind(this, goal.key)} 
      android_ripple={{ color: "#96CF98" }}
      
      >
        <Text style={{ color: 'white',padding:6,fontFamily: "serif",}} > {goal.text} </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  individualGoals: {
    backgroundColor: "rgba(0,0,0,0.8)",
    fontSize: 26,
    color: "#96CF98",
    
    marginBottom: 10,
    minWidth: 200,
    textAlign: "center",
    borderWidth: 8,
    borderColor: "#024004",
    //rounded corners will be missing on iOS
    //we would have to wrap our text into view and add the styles to the view and make text into nested element
    //then we would have to add style eg color to the text separately (NO cascading style inheritence)
  },

})