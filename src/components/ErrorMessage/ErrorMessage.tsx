import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'

export const ErrorMessage: React.FC<{ text: string }> = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.empty}>{text}</Text>
    </View>
  )
}
