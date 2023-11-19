import React from 'react'
import { View, ScrollView } from 'react-native'

import { Item } from '../Item/Item'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'

import { useTasks } from '@/hooks/task'
import { refreshTasks } from '@/store/tasks/actions'

export const Listing = () => {
  const { loading, list } = useTasks()

  React.useEffect(() => {
    refreshTasks()
  }, [])

  if (loading) {
    return <ErrorMessage text="Loading Tasks..." />
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{ marginTop: 20 }}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {list?.map((task) => (
          <Item key={task.id} task={task} />
        ))}
      </ScrollView>
    </View>
  )
}
