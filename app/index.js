import React from 'react'
import { useRouter } from 'expo-router'
import { View, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'

import { Header } from '@/components/Header/Header'
import { Listing } from '@/components/Listing/Listing'

import THEME from '@/theme'
import { styles } from './styles'

export default function App() {
  const router = useRouter()

  const registerTask = () => {
    router.push('/register')
  }

  return (
    <View style={styles.app}>
      <Header />

      <Listing />

      <TouchableOpacity
        style={styles.container}
        onPress={registerTask}
        activeOpacity={0.7}
      >
        <Entypo name="plus" size={45} color={THEME.COLORS.WHITE} />
      </TouchableOpacity>
    </View>
  )
}
