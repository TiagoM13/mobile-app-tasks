import React from 'react'
import { View, Text, Alert } from 'react-native'
import { useForm } from 'react-hook-form'

import { Header } from '@/components/Header/Header'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'

import { styles } from './styles/screens'
import { createTask } from '@/store/tasks/actions'
import { ITask } from '@/entities/task'
import { useRouter } from 'expo-router'

type FormProps = {
  title?: string
}

export default function Register() {
  const router = useRouter()
  const { control, handleSubmit } = useForm<FormProps>()

  const handleCreateTask = React.useCallback(async (task: ITask) => {
    try {
      await createTask(task)

      Alert.alert('Task Created', 'Your task has been successfully created!')
      // router.push('/')
    } catch (error) {
      console.error('Error creating task:', error)
    }
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />

        <Button type="back" />
      </View>

      <Text style={styles.text}>Create task</Text>

      <Input control={control} name="title" />

      <Button
        type="button"
        press={handleSubmit(handleCreateTask)}
        label="Save task"
      />
    </View>
  )
}
