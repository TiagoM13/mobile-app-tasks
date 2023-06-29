import React from 'react'
import { View, Text } from 'react-native'
import { useRouter } from 'expo-router'

import { Header } from '@/components/Header/Header'
import { BackButton } from '@/components/BackButton/BackButton'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'

import { useTaskContext } from '@/hooks/taskContext'

import { styles } from './styles/screens'

export default function Register() {
  const [description, setDescription] = React.useState('')
  const { createTask } = useTaskContext()
  const router = useRouter()

  function handleCreateTask() {
    if (description === '') {
      console.log('Escreva uma tarefa para prosseguir!')
      return
    }

    createTask(description)
    router.push('/')
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
