import { View, Text, StyleSheet, Pressable, } from 'react-native'

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: colors.accent }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem} // for iOS devices
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  )
}

export default GoalItem

const colors = {
  primary: '#58b6f9',
  secondary: '#06456f',
  accent: '#ff3d81',
  background: '#141414',
  text: '#ffffff',
  border: '#cccccc',
}

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: colors.primary,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,

    color: colors.text,
  },
})
