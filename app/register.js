import React from 'react'
import { View, TouchableOpacity, Text, TextInput } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

import { Header } from '../components/Header/Header'
import { useTaskContext } from '../hooks/taskContext'

import THEME from '../theme'
import { styles } from './styles/register'

export default function Register() {
  const [description, setDescription] = React.useState(null)
  const { createTask } = useTaskContext()
  const router = useRouter()

  function handleCreateTask() {
    createTask(description)
    router.push('/')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.icon}
          onPress={() => router.back()}
        >
          <MaterialIcons name="keyboard-arrow-left" size={40} color="white" />
        </TouchableOpacity>
      </View>

      <Text style={styles.text}>Create task</Text>

      {/* input text */}
      <View style={{ flex: 1 }}>
        <TextInput
          maxLength={40}
          value={description}
          onChangeText={setDescription}
          style={styles.input}
          placeholder="Write a task..."
          placeholderTextColor={THEME.COLORS.WHITE}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleCreateTask}
      >
        <Text style={styles.textButton}>Save task</Text>
      </TouchableOpacity>
    </View>
  )
}
