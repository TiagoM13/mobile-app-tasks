import React from 'react'
import { TextInput, View } from 'react-native'

import { Controller } from 'react-hook-form'

import THEME from '@/theme'
import { styles } from './styles'

export const Input = ({ control, name, defaultValue }) => {
  return (
    <View style={{ flex: 1 }}>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <TextInput
            maxLength={40}
            value={value}
            onChangeText={onChange}
            style={styles.input}
            placeholder="Write a task..."
            placeholderTextColor={THEME.COLORS.WHITE}
          />
        )}
      />
    </View>
  )
}
