import React from 'react'
import { View, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import THEME from '@/theme'
import { styles } from './styles'

export const SearchInput = (props) => {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={24} color={THEME.COLORS.YELLOW} />

      <TextInput
        placeholder="Search"
        value={props.value}
        onChangeText={props.onChange}
        style={styles.input}
      />
    </View>
  )
}
