import React from 'react'
import { View, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import THEME from '@/theme'
import { styles } from './styles'

type SearchInputProps = {
  value: string
  onChange: () => void
}

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={24} color={THEME.COLORS.YELLOW} />

      <TextInput
        placeholder="Search"
        value={value}
        onChangeText={onChange}
        style={styles.input}
      />
    </View>
  )
}
