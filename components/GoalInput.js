import { useState } from 'react'
import { View, Button, TextInput, StyleSheet, Modal, Image } from 'react-native'

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  function goalInputHandler(enteredtext) {
    setEnteredGoalText(enteredtext)
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText)
    setEnteredGoalText('')
  }

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Goal ..."
          placeholderTextColor="rgba(255,255,255, 0.5)"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              color={colors.primary}
              title="Add Goal"
              onPress={addGoalHandler}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color={colors.accent}
              onPress={props.onCancel}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const colors = {
  primary: '#58b6f9',
  secondary: '#06456f',
  accent: '#ff3d81',
  background: '#141414',
  text: '#ffffff',
  border: '#cccccc',
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.background,
    flex: 1, // takes 1/4 since you add all flex values (1 + 3 = 4)
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 207,
    marginHorizontal: 8,
  },
  textInput: {
    color: colors.text,
    borderColor: colors.primary,
    backgroundColor: colors.secondary,
    opacity: 0.8,
    borderWidth: 1,
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
})
