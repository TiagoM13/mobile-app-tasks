import { Stack } from 'expo-router'
import React from 'react'

const LayoutFavorites: React.FC = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Favorties' }} />
    </Stack>
  )
}

export default LayoutFavorites
