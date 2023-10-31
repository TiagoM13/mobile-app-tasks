import React from 'react'
import { Text, View } from 'react-native'
import { useRouter } from 'expo-router'

import { Checkbox } from '../Checkbox/Checkbox'
import { ActionButton } from '../ActionButton'

import { useTaskContext } from '@/hooks/taskContext'

import { styles, text } from './styles'

export function Item({ task }) {
  const router = useRouter()
  const { toggleCheckedTask, deleteTask } = useTaskContext()

  const handleToggleChecked = React.useCallback(() => {
    toggleCheckedTask(task.id)
  }, [toggleCheckedTask])

  const handleDeleteTask = React.useCallback(() => {
    deleteTask(task.id)
  }, [deleteTask])

  const handleTaskUpdateRoute = React.useCallback(() => {
    router.push({
      pathname: 'update',
      params: {
        id: task.id,
        description: task.description,
        checked: task.checked,
      },
    })
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Checkbox checked={task.checked} onCheck={handleToggleChecked} />

        <View style={styles.textContent}>
          <Text style={styles.time}>{task.time}</Text>
          <Text style={text({ checked: task.checked }).description}>
            {task.description}
          </Text>
        </View>
      </View>

      <ActionButton
        actions={{
          update: handleTaskUpdateRoute,
          delete: handleDeleteTask,
        }}
      />
    </View>
  )
}
