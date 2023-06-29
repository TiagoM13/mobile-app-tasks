import React from 'react'
import { TextInput, View } from 'react-native'

import THEME from '@/theme'
import { styles } from './styles'

export const Input = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <TextInput
        maxLength={40}
        value={props.value}
        defaultValue={props.defaultValue}
        onChangeText={props.onChange}
        style={styles.input}
        placeholder="Write a task..."
        placeholderTextColor={THEME.COLORS.WHITE}
      />
    </View>
  )
}
