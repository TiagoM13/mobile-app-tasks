import React from 'react'
import { View, ScrollView } from 'react-native'

import { Item } from '../Item/Item'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'

import { ITask } from '@/entities/task'

type ListProps = {
  list: ITask[]
  loading?: boolean
  loadError?: boolean
}

export const Listing = ({ list, loading, loadError }: ListProps) => {
  if (loading) {
    return <ErrorMessage text="Loading Tasks..." />
  }

  if (loadError) {
    return <ErrorMessage text="Error loading tasks" />
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
