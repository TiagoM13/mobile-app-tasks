import { Tabs } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'

import React from 'react'
import ButtonPlus from '@/components/ButtonPlus'
import { ContainerNavigatorRoot } from '@/styles'

const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTintColor: 'blue',
  tabBarStyle: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tabBarHideOnKeyboard: true,
}

export default function TabRoutesLayout() {
  return (
    <ContainerNavigatorRoot>
      <Tabs initialRouteName="index" screenOptions={screenOptions}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Inicio',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="new"
          options={{
            title: 'New',
            tabBarIcon: ({ focused, color, size }) => (
              <ButtonPlus size={size} color={color} focused={focused} />
            ),
          }}
        />

        <Tabs.Screen
          name="favorites"
          options={{
            title: 'Favoritos',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="favorite" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </ContainerNavigatorRoot>
  )
}
