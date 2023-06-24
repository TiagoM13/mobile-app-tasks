import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import { Item } from '../Item/Item'
import { Tasks } from '../../database'

import { styles } from './styles'

export function Listing() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Today’s tasks</Text>

      {/* List items... */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {Tasks.map((task) => (
          <Item key={task.id} time={task.time} description={task.description} />
        ))}
      </ScrollView>
    </View>
  )
}
