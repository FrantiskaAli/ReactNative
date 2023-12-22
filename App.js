import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground } from 'react-native';
import GoalInput from './components/input';
import GoalItem from './components/items';

export default function App() {

  const [goals, setGoals] = useState([])
  const [input, setInput] = useState("")
  const [modal,setModal] = useState(false)

  const textValueHandler = (textInput) => {
    setInput(textInput)
    //in react native by using "onChangeText prop the value of textfield will automatically become prop for this function,even tho we dont use paratheses when calling function"
    console.log(textInput)
  }
  const addGoal = (input) => {
    setGoals(currentGoals => [...currentGoals, {text: input, key: Math.random().toString()}]);//it is better practice to use arrow function then spread operator by itself
    setInput("");
    setModal("false")
    console.log(goals)
  }
  const deleteItem = (key)=>{
    setGoals((currentGoals)=>{
      return currentGoals.filter((goal)=> goal.key !== key)
    })
    console.log('delete')
  }


  return (
       <ImageBackground source={require("./assets/images/background.jpg")} resizeMode="cover" style={styles.container}>
    <View style={styles.buttonBox}>
     <Button title="Add new goal" color="#174839" onPress={()=>setModal(true)}/>
    
     </View>
   <GoalInput addGoal={addGoal} 
   textValueHandler={textValueHandler}
    input={input}
    modalState={modal}
    close={()=>setModal(false)}

/>

      <View style={styles.listContainer}>
        <Text style={styles.headerOfList}>My goals</Text>
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
            return  <GoalItem goal={goal}   deleteItem={deleteItem}/>
          })}

        </ScrollView>
      </View>


    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor:"#025F36"
  },
 buttonBox:{
  flex:1,
  justifyContent:"center",
  alignItems:"center",
 },
 image:{
  flex: 1,
  justifyContent: 'center',
 },
  listContainer: {
    flex: 4,
    width: "100%",
    alignItems: "center",

  },
  headerOfList: {
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 20,
    fontFamily: "serif"

  },
  
});
