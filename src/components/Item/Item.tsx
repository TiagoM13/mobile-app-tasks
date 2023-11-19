import React from 'react'
import { Text, View } from 'react-native'

import { Checkbox } from '../Checkbox/Checkbox'
import { ActionButton } from '../ActionButton'

import { ITask } from '@/entities/task'

import { styles, text } from './styles'

interface ItemProps {
  task: ITask
}

export function Item({ task }: ItemProps) {
  const checked = task.status === 'completed'

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Checkbox checked={checked} onCheck={() => console.log()} />

        <View style={styles.textContent}>
          <Text style={styles.time}>{task.created_at}</Text>
          <Text style={text({ status: task.status }).description}>
            {task.title}
          </Text>
        </View>
      </View>

      <ActionButton actions={{}} />
    </View>
  )
}
