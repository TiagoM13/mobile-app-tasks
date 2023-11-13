import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

import { styles } from './styles'

type ButtonProps = {
  type: 'button' | 'back'
  label?: string
  press?: () => void
}

export const Button = ({
  type = 'button',
  label = 'Submit',
  press,
}: ButtonProps) => {
  const router = useRouter()
  const goBack = () => router.back()

  if (type === 'back') {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.back}
        onPress={goBack}
      >
        <MaterialIcons name="keyboard-arrow-left" size={40} color="white" />
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={press}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}
