import { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [userGoals, setUserGoals] = useState([
    { text: 'Learn React', id: Math.random().toString() },
    { text: 'learn React Native', id: Math.random().toString() },
  ])

  startAddGoalhandler = () => {
    setModalIsVisible(true)
  }
  ;[]
  endAddGoalHandler = () => {
    setModalIsVisible(false)
  }

  addGoalHandler = (enteredGoalText) => {
    setUserGoals((currentUserGoals) => [
      ...currentUserGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ])
    endAddGoalHandler()
  }

  deleteGoalhandler = (id) => {
    setUserGoals((currentUserGoals) => {
      return currentUserGoals.filter((goal) => goal.id !== id)
    })
  }

  return (
    <>
      {/* changes status bar color to white so its visible on dark Bg */}
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new Goal"
          color={colors.secondary}
          onPress={startAddGoalhandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={userGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalhandler}
                />
              )
            }}
            //key extrator in case we receive id or etc instead of key which flatlist looks for
            keyExtractor={(item, index) => {
              return item.id
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  )
}

const colors = {
  primary: '#58b6f9',
  secondary: '#06456f',
  accent: '#ff3d81',
  text: '#ffffff',
  border: '#cccccc',
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, //since its the only container (root) it takes up all the space
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5, // takes 5/6 since you add all flex values (1 + 3 = 4)
  },
})
