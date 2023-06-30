import React from 'react'
import { View, Text, Alert } from 'react-native'

import { Header } from '@/components/Header/Header'
import { BackButton } from '@/components/BackButton/BackButton'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'

import { useTaskContext } from '@/hooks/taskContext'

import { styles } from './styles/screens'

export default function Register() {
  const [description, setDescription] = React.useState('')
  const { createTask } = useTaskContext()

  function handleCreateTask() {
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

        <BackButton />
      </View>

      <Text style={styles.text}>Create task</Text>

      {/* input text */}
      <Input
        value={description}
        onChange={setDescription}
        defaultValue={description}
      />

      <Button press={handleCreateTask} text="Save task" />
    </View>
  )
}
