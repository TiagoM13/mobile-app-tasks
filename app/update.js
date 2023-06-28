import React from 'react'
import { View, TouchableOpacity, Text, TextInput } from 'react-native'
import { useRouter, useLocalSearchParams } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'

import { Header } from '../components/Header/Header'
import { useTaskContext } from '../hooks/taskContext'

import THEME from '../theme'
import { styles } from './styles/register'

export default function Update() {
  const [updatedDescription, setUpdatedDescription] = React.useState(null)
  const { tasks, updateTask } = useTaskContext()
  const router = useRouter()
  const params = useLocalSearchParams()
  const { id, description } = params

  function handleUpdateTask() {
    const taskId = parseInt(id)
    const taskToUpdate = tasks.find((task) => task.id === taskId)

    if (taskToUpdate) {
      updateTask(taskId, updatedDescription)

      router.push('/')
    }
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
          value={updatedDescription}
          defaultValue={description}
          onChangeText={setUpdatedDescription}
          style={styles.input}
          placeholder="Write a task..."
          placeholderTextColor={THEME.COLORS.WHITE}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleUpdateTask}
      >
        <Text style={styles.textButton}>Updated task</Text>
      </TouchableOpacity>
    </View>
  )
}
