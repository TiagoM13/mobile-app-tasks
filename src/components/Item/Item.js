import React from 'react'
import { Text, View } from 'react-native'
import { useRouter } from 'expo-router'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

import { Checkbox } from '../Checkbox/Checkbox'
import { IconButton } from '../IconButton/IconButton'

import { useTaskContext } from '@/hooks/taskContext'

import THEME from '@/theme'
import { styles, text } from './styles'

export function Item({ task }) {
  const router = useRouter()
  const { deleteTask, toggleCheckedTask } = useTaskContext()

  function handleToggleChecked() {
    toggleCheckedTask(task.id)
  }

  function handleDeleteTask() {
    deleteTask(task.id)
  }

  function handleTaskUpdateRoute() {
    router.push({
      pathname: 'update',
      params: {
        id: task.id,
        description: task.description,
        checked: task.checked,
      },
    })
  }

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

      {/* buttons */}
      <View style={styles.buttonsContent}>
        {/* button edit */}
        <IconButton
          action={handleTaskUpdateRoute}
          icon={
            <MaterialCommunityIcons
              name="playlist-edit"
              size={25}
              color={THEME.COLORS.YELLOW}
            />
          }
        />

        {/* button delete */}
        <IconButton
          action={handleDeleteTask}
          icon={
            <MaterialIcons
              name="delete"
              size={25}
              color={THEME.COLORS.YELLOW}
            />
          }
        />
      </View>
    </View>
  )
}
