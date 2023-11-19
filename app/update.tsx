import React from 'react'
import { View, Text, Alert } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useForm } from 'react-hook-form'

import { Header } from '@/components/Header/Header'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'

import { useTaskContext } from '@/hooks/taskContext'

import { styles } from './styles/screens'

export default function Update() {
  const { control, handleSubmit } = useForm()
  // const params = useLocalSearchParams()
  // const { id, description, checked } = params

  // function handleUpdateTask({ description }) {
  //   if (description === '') {
  //     Alert.alert('Empty field', 'Write a task to be able to update!')
  //     return
  //   }

  //   const taskId = parseInt(id)
  //   const taskToUpdate = tasks.find((task) => task.id === taskId)

  //   if (taskToUpdate) {
  //     updateTask(taskId, description, checked)
  //   }
  // }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />

        <Button type="back" />
      </View>

      <Text style={styles.text}>Update task</Text>

      <Input
        control={control}
        name="description"
        defaultValue={{ title: 'Teste' }}
      />

      <Button
        type="button"
        label="Updated task"
        press={handleSubmit(() => console.log())}
      />
    </View>
  )
}
