import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {

  const [goals, setGoals] = useState([])
  const [input, setInput] = useState("")

  const textValueHandler = (textInput) => {
    setInput(textInput)
    //in react native by using "onChangeText prop the value of textfield will automatically become prop for this function,even tho we dont use paratheses when calling function"
    console.log(textInput)
  }
  const addGoal = (input) => {
    setGoals(goals => [...goals, {text: input, key: Math.random().toString()}]);//it is better practice to use arrow function then spread operator by itself
    setInput("");
  }


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="What's your goal?"
          onChangeText={textValueHandler}
          value={input}
        />

        <Button onPress={() => addGoal(input)} title="Add" />

      </View>

      <View style={styles.listContainer}>
        <Text style={styles.headerOfList}>List of goals</Text>
        <ScrollView>{
          //scrollView renders all its child items, (performance issue for loong lists)
          //it has tons of configurations in official documentation
          //we could use <FlatList> ,it will only render items as user is getting closer to the item
          //flatlist supports very similar props
          //in flat list we dont map data manually!!!!!

          //eg : <FlatList data={goals} renderItem={item => <View style={styles.individualGoals}><Text style={{ color: 'white' }} > {itemData.item.text} </Text>  </View>}>
          //item we get will be object,holdr properties like itemData.index, itemData.item + no need for key (it automatically looks for key property in the object)
          //also has key extractor prop if we dont have key in our object
         
          }
          {goals.map((goal) => {
            return (
              <View key={goal.key} style={styles.individualGoals}>
                <Text style={{ color: 'white' }} > {goal.text} </Text> 
              </View>)
          })}
        </ScrollView>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 15,
    flex: 1
  },
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
  listContainer: {
    flex: 4,
    width: "100%",
    alignItems: "center",

  },

  headerOfList: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,


  },
  individualGoals: {
    backgroundColor: "blue",
    fontSize: 20,
    color: "white",
    padding: 4,
    marginBottom: 2,
    minWidth: 100,

    textAlign: "center",
    borderWidth: 1,
    borderColor: "lightblue",
    borderRadius: 10,//rounded corners will be missing on iOS
    //we would have to wrap our text into view and add the styles to the view and make text into nested element
    //then we would have to add style eg color to the text separately (NO cascading style inheritence)
  },

});
