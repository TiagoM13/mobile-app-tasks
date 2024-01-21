/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import { View, Text, Alert } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useForm } from 'react-hook-form'

import { Header } from '@/components/Header/Header'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'
import { ErrorMessage } from '@/components/ErrorMessage/ErrorMessage'

import { ITask } from '@/entities/task'
import { useTask } from '@/hooks/task'
import { refreshTask, updateTask } from '@/store/tasks/actions'

import { styles } from './styles/screens'

const Update = () => {
  const { data, loading } = useTask()
  const { control, handleSubmit } = useForm()

  const router = useRouter()
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

  const handleUpdateTask = React.useCallback(
    async (task: ITask) => {
      await updateTask(String(id), task)
      router.push('/')

      Alert.alert('Task Updated', 'Your task has been successfully updated!')
    },
    [id],
  )

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
          <Input control={control} name="title" defaultValue={data?.title} />

          <Button
            type="button"
            label="Updated task"
            press={handleSubmit(handleUpdateTask)}
            loading={loading}
          />
        </>
      )}
    </View>
  )
}

export default Update
