import React from 'react'
import { Alert } from 'react-native'
import { useForm } from 'react-hook-form'
import { useRouter } from 'expo-router'

import { Header } from '@/components/Header/Header'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'

import { ITask } from '@/entities/task'
import { useTask } from '@/hooks/task'
import { createTask } from '@/store/tasks/actions'

import { Title, ViewContainer } from '@/styles'

type ITaskForm = {
  title?: string
}

export default function CreateTask() {
  // Hooks
  const router = useRouter()
  const { control, handleSubmit, setValue } = useForm<ITaskForm>()
  const { loading } = useTask()

  // Handlers
  const handleCreateTask = React.useCallback(async (task: ITask) => {
    await createTask(task)
    setValue('title', '')

    router.push('/(tabs)/home')
    Alert.alert('Task Create', 'Your task has been successfully created!')
  }, [])

  return (
    <ViewContainer>
      <Header />
      <Title>Create Task</Title>

      <Input control={control} name="title" defaultValue="" />

      <Button
        type="button"
        loading={loading}
        label="Create"
        press={handleSubmit(handleCreateTask)}
      />
    </ViewContainer>
  )
}
