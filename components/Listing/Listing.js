import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import { styles } from './styles'

export const Listing = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Today’s tasks</Text>

      {/* List items... */}
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {/* <Item /> */}
      </ScrollView>
    </View>
  )
}
