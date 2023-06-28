import React from 'react'
import { View, Text } from 'react-native'
import { useRouter, useLocalSearchParams } from 'expo-router'

import { BackButton } from '../src/components/BackButton/BackButton'
import { Button } from '../src/components/Button/Button'
import { Input } from '../src/components/Input/Input'
import { Header } from '../src/components/Header/Header'
import { useTaskContext } from '../src/hooks/taskContext'

import { styles } from './styles/screens'

export default function Update() {
  const [updatedDescription, setUpdatedDescription] = React.useState(null)
  const { tasks, updateTask } = useTaskContext()
  const router = useRouter()
  const params = useLocalSearchParams()
  const { id, description } = params

  function handleUpdateTask() {
    if (updatedDescription === '') {
      console.log('Escreva uma tarefa para poder atualizar!')
      return
    }

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
