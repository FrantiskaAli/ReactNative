
export default function GoalItem() {
   return(
   <View key={goal.key} style={styles.individualGoals}>
                <Text style={{ color: 'white' }} > {goal.text} </Text> 
              </View>)
}