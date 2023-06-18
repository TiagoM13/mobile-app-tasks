import React from 'react'
import { View } from 'react-native'

import { Header } from '../components/Header/Header'
import { Listing } from '../components/Listing/Listing'

import { styles } from './styles'

export default function App() {
  return (
    <View style={styles.app}>
      <Header />

      {/* Input Search */}

      <Listing />
    </View>
  )
}
