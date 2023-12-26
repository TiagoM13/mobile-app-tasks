import React from 'react'
import { Text, View } from 'react-native'
import { useRouter } from 'expo-router'

import { deleteTask, toggleTaskStatus } from '@/store/tasks/actions'

import { Checkbox } from '../Checkbox/Checkbox'
import { ActionButton } from '../ActionButton'

import { ITask } from '@/entities/task'

import { styles, text } from './styles'

interface ItemProps {
  task: ITask
}

export function Item({ task }: ItemProps) {
  const router = useRouter()
  const [checked, setChecked] = React.useState<
    'pending' | 'completed' | undefined
  >(task.status)

  const handleTaskUpdateRoute = React.useCallback(() => {
    router.push({
      pathname: 'update',
      params: {
        id: task.id,
      },
    })
  }, [])

  const handleDeleteTask = React.useCallback(async () => {
    await deleteTask(String(task.id))
  }, [])

  const handleToggleTaskStatus = React.useCallback(async () => {
    await toggleTaskStatus(String(task.id))

    setChecked((prev) => (prev === 'completed' ? 'pending' : 'completed'))
  }, [])

  // format dates
  const currentDate = task.updated_at ? task.updated_at : task.created_at
  const date = new Date(`${currentDate}`)
  const format_date = date.toDateString()
  const hours = date.toLocaleTimeString()

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Checkbox checked={checked} onCheck={handleToggleTaskStatus} />

        <View style={styles.textContent}>
          <Text style={styles.time}>
            {format_date} - {hours}
          </Text>
          <Text style={text({ status: task.status }).description}>
            {task.title}
          </Text>
        </View>
      </View>

      <ActionButton
        disabled={checked === 'completed'}
        actions={{
          update: handleTaskUpdateRoute,
          delete: handleDeleteTask,
        }}
      />
    </View>
  )
}
