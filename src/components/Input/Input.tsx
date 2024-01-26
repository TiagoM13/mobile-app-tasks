import React from 'react'
import { TextInput, View, Text } from 'react-native'

import { Control, FieldValues, useController } from 'react-hook-form'

import THEME from '@/theme'
import { styles } from './styles'

interface InputProps<T extends FieldValues = FieldValues> {
  control: Control<T>
  name: string
  defaultValue?: string
  placeholder?: string
}

export const Input = ({
  control,
  name,
  defaultValue,
  placeholder = 'Write a task...',
}: InputProps) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    defaultValue,
    name,
    rules: {
      required: 'Task title is required',
      maxLength: {
        value: 40,
        message: 'Task title cannot exceed 40 characters',
      },
    },
  })

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        value={field.value}
        onChangeText={field.onChange}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={THEME.COLORS.WHITE}
      />

      {error && <Text style={styles.text}>{error.message}</Text>}
    </View>
  )
}
