import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import { Item } from '../Item/Item'

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
        <Item time="8:00 AM" description="Go to church" />
        <Item time="12:00 PM" description="Cook for the family" />
        <Item time="2:00 PM" description="Make my hair" />
      </ScrollView>
    </View>
  )
}
