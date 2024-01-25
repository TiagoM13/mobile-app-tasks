import { Stack } from 'expo-router'
import React from 'react'

const LayoutNew: React.FC = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Task' }} />
    </Stack>
  )
}

export default LayoutNew
