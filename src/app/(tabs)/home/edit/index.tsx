import React from 'react'
import { Alert } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useForm } from 'react-hook-form'

import { Header } from '@/components/Header/Header'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'
import { ErrorMessage } from '@/components/ErrorMessage/ErrorMessage'

import { ITask } from '@/entities/task'
import { useTask } from '@/hooks/task'
import { updateTask } from '@/store/tasks/actions'

import { Title, ViewContainer } from '@/styles'

const EditTask = () => {
  const router = useRouter()
  const params = useLocalSearchParams()
  const { id } = params as ITask

  const { data, loading, refresh: refreshTask } = useTask()
  const { control, handleSubmit } = useForm()

  const taskId = data?.id === id

  const refresh = React.useCallback(() => {
    if (id) {
      refreshTask(id)
    }
  }, [id])

  React.useEffect(() => {
    refresh()
  }, [])

  const handleUpdateTask = React.useCallback(
    async (task: ITask) => {
      await updateTask(String(id), task)

      router.push('/(tabs)/home/')
      Alert.alert('Task Updated', 'Your task has been successfully updated!')
    },
    [id],
  )

  return (
    <ViewContainer>
      <Header />

      <Title>Update task</Title>

      {loading && <ErrorMessage text="Loading Task..." />}

      {taskId && !loading && (
        <>
          <Input control={control} name="title" defaultValue={data?.title} />

          <Button
            type="button"
            label="Update"
            loading={loading}
            press={handleSubmit(handleUpdateTask)}
          />
        </>
      )}
    </ViewContainer>
  )
}

export default EditTask
