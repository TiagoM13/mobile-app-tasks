import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Header } from '../components/Header/Header'
import { Listing } from '../components/Listing/Listing'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      {/* Input Search */}

      <Listing />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
})
