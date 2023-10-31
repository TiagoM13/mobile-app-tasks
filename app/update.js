import React from 'react'
import { View, Text, Alert } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useForm } from 'react-hook-form'

import { Header } from '@/components/Header/Header'
import { BackButton } from '@/components/BackButton/BackButton'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'

import { useTaskContext } from '@/hooks/taskContext'

import { styles } from './styles/screens'

export default function Update() {
  const { tasks, updateTask } = useTaskContext()
  const params = useLocalSearchParams()
  const { id, description, checked } = params

  const { control, handleSubmit } = useForm()

  function handleUpdateTask({ description }) {
    if (description === '') {
      Alert.alert('Empty field', 'Write a task to be able to update!')
      return
    }

    const taskId = parseInt(id)
    const taskToUpdate = tasks.find((task) => task.id === taskId)

    if (taskToUpdate) {
      updateTask(taskId, description, checked)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />

        <Button type="back" />
      </View>

      <Text style={styles.text}>Update task</Text>

      <Input control={control} name="description" defaultValue={description} />

      <Button press={handleSubmit(handleUpdateTask)} label="Updated task" />
    </View>
  )
}
