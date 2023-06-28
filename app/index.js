import React from 'react'
import { View } from 'react-native'

import { Header } from '../src/components/Header/Header'
import { Listing } from '../src/components/Listing/Listing'
import { RegisterTaskButton } from '../src/components/RegisterTaskButton/RegisterTaskButton'

import { styles } from './styles'

export default function App() {
  return (
    <View style={styles.app}>
      <Header />

      {/* Input Search */}

      <Listing />
      <RegisterTaskButton />
    </View>
  )
}
