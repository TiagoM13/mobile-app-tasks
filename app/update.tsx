import React from 'react'
import { View, Text, Alert } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useForm } from 'react-hook-form'

import { Header } from '@/components/Header/Header'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'

import { styles } from './styles/screens'
import { ITask } from '@/entities/task'
import { useTask } from '@/hooks/task'
import { refreshTask } from '@/store/tasks/actions'
import { ErrorMessage } from '@/components/ErrorMessage/ErrorMessage'

export default function Update() {
  const { data, loading } = useTask()
  const { control, handleSubmit } = useForm()

  const params = useLocalSearchParams()
  const { id } = params as ITask

  const taskId = data?.id === id

  const refresh = React.useCallback(() => {
    if (id) {
      refreshTask(id!)
    }
  }, [id])

  React.useEffect(() => {
    refresh()
  }, [])

  const handleUpdateTask = (title: string) => {
    if (title === '') {
      Alert.alert('Empty field', 'Write a task to be able to update!')
      return
    }

    // const taskId = parseInt(id)
    // const taskToUpdate = tasks.find((task) => task.id === taskId)

    if (data?.title) {
      // updateTask(taskId, description, checked)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />

        <Button type="back" />
      </View>

      <Text style={styles.text}>Update task</Text>

      {loading && <ErrorMessage text="Loading Task..." />}

      {taskId && !loading && (
        <>
          <Input
            control={control}
            name="description"
            defaultValue={data?.title}
          />

          <Button
            type="button"
            label="Updated task"
            press={handleSubmit(() => console.log())}
          />
        </>
      )}
    </View>
  )
}
