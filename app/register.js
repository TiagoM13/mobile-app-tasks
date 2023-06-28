import React from 'react'
import { View, Text } from 'react-native'
import { useRouter } from 'expo-router'

import { BackButton } from '../src/components/BackButton/BackButton'
import { Header } from '../src/components/Header/Header'
import { Button } from '../src/components/Button/Button'
import { Input } from '../src/components/Input/Input'
import { useTaskContext } from '../src/hooks/taskContext'

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
