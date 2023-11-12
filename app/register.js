import React from 'react'
import { View, Text, Alert } from 'react-native'
import { useForm } from 'react-hook-form'

import { Header } from '@/components/Header/Header'
import { BackButton } from '@/components/BackButton/BackButton'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'

import { useTaskContext } from '@/hooks/taskContext'

import { styles } from './styles/screens'

export default function Register() {
  const { createTask } = useTaskContext()

  const { control, handleSubmit } = useForm()

  function handleCreateTask({ description }) {
    if (description === '') {
      Alert.alert('Empty field', 'Write a task to proceed!')
      return
    }

    createTask(description)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />

        <Button type="back" />
      </View>

      <Text style={styles.text}>Create task</Text>

      {/* input text */}
      <Input control={control} name="description" />

      <Button press={handleSubmit(handleCreateTask)} label="Save task" />
    </View>
  )
}
