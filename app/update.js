import React from 'react'
import { View, Text, Alert } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

import { Header } from '@/components/Header/Header'
import { BackButton } from '@/components/BackButton/BackButton'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'

import { useTaskContext } from '@/hooks/taskContext'

import { styles } from './styles/screens'

export default function Update() {
  const [updatedDescription, setUpdatedDescription] = React.useState(null)
  const { tasks, updateTask } = useTaskContext()
  const params = useLocalSearchParams()
  const { id, description, checked } = params

  function handleUpdateTask() {
    if (updatedDescription === '') {
      Alert.alert('Empty field', 'Write a task to be able to update!')
      return
    }

    const taskId = parseInt(id)
    const taskToUpdate = tasks.find((task) => task.id === taskId)

    if (taskToUpdate) {
      updateTask(taskId, updatedDescription, checked)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />

        <BackButton />
      </View>

      <Text style={styles.text}>Create task</Text>

      {/* input text */}
      <Input
        value={updatedDescription}
        defaultValue={description}
        onChange={setUpdatedDescription}
      />

      <Button press={handleUpdateTask} text="Updated task" />
    </View>
  )
}
