import React from 'react'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles'
import { useRouter } from 'expo-router'

export const BackButton = () => {
  const router = useRouter()

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.button}
      onPress={() => router.back()}
    >
      <MaterialIcons name="keyboard-arrow-left" size={40} color="white" />
    </TouchableOpacity>
  )
}
