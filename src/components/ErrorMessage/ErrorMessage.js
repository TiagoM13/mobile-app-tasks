import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'

export const ErrorMessage = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.empty}>{props.text}</Text>
    </View>
  )
}
