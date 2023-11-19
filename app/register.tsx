import React from 'react'
import { View, Text, Alert } from 'react-native'
import { useForm } from 'react-hook-form'

import { Header } from '@/components/Header/Header'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'

import { styles } from './styles/screens'

export default function Register() {
  const { control, handleSubmit } = useForm()

  // function handleCreateTask(title: string) {
  //   if (title === '') {
  //     Alert.alert('Empty field', 'Write a task to proceed!')
  //     return
  //   }

  //   createTask(title)
  // }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />

        <Button type="back" />
      </View>

      <Text style={styles.text}>Create task</Text>

      {/* input text */}
      <Input control={control} name="description" />

      <Button
        type="button"
        press={handleSubmit(() => console.log())}
        label="Save task"
      />
    </View>
  )
}
