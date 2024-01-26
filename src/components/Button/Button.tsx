import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

type ButtonProps = {
  label?: string
  loading?: boolean
  press?: () => void
}

export const Button = ({ label = 'Submit', press, loading }: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={loading}
      style={styles.button}
      activeOpacity={0.7}
      onPress={press}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}
