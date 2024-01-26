import React from 'react'
import { View, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import THEME from '@/theme'
import { styles } from './styles'

type Props = {
  value: string
  onChange: (text: string) => void
}

export const Search = ({ value, onChange }: Props) => {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={24} color={THEME.COLORS.YELLOW} />

      <TextInput
        placeholder="Search"
        value={value}
        onChangeText={(text) => onChange(text)}
        style={styles.input}
      />
    </View>
  )
}
