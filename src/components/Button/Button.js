import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

export const Button = (props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={props.press}
    >
      <Text style={styles.textButton}>{props.text}</Text>
    </TouchableOpacity>
  )
}
