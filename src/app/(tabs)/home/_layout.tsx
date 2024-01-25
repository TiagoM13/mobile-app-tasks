import { Stack } from 'expo-router'
import React from 'react'

const LayoutHome: React.FC = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Home' }} />
    </Stack>
  )
}

export default LayoutHome
