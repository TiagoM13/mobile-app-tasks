import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import { Item } from '../Item/Item'

import { useTaskContext } from '@/hooks/taskContext'

import { styles } from './styles'

export function Listing() {
  const { tasks } = useTaskContext()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Today’s tasks</Text>

      {/* List items... */}
      {tasks.length ? (
        <ScrollView
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >
          {tasks.map((task) => (
            <Item
              key={task.id}
              id={task.id}
              time={task.time}
              description={task.description}
              checked={task.checked}
            />
          ))}
        </ScrollView>
      ) : (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text style={styles.empty}>Não há tarefas criadas</Text>
        </View>
      )}
    </View>
  )
}
