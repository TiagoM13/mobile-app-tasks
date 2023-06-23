import React from 'react'
import { View, TouchableOpacity, Text, TextInput } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

import { Header } from '../components/Header/Header'

import { register } from './styles/index'
import THEME from '../theme'

export default function Register() {
  const router = useRouter()

  return (
    <View style={register.container}>
      <View style={register.header}>
        <Header />

        <TouchableOpacity
          activeOpacity={0.7}
          style={register.icon}
          onPress={() => router.back()}
        >
          <MaterialIcons name="keyboard-arrow-left" size={40} color="white" />
        </TouchableOpacity>
      </View>

      <Text style={register.text}>Create task</Text>

      {/* input text */}
      <View style={{ flex: 1 }}>
        <TextInput
          style={register.input}
          placeholder="Write a task..."
          placeholderTextColor={THEME.COLORS.WHITE}
        />
      </View>

      <TouchableOpacity style={register.button} activeOpacity={0.7}>
        <Text style={register.textButton}>Save task</Text>
      </TouchableOpacity>
    </View>
  )
}
