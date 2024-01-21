import React from 'react'
import { View } from 'react-native'
import { Stack } from 'expo-router'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { StatusBar } from 'expo-status-bar'
import Entypo from '@expo/vector-icons/Entypo'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import { styles } from './styles'

SplashScreen.preventAutoHideAsync()

const Layout = () => {
  const [ready, setReady] = React.useState(false)

  const [fonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  React.useEffect(() => {
    const prepare = async () => {
      try {
        await Font.loadAsync(Entypo.font)
        await new Promise((resolve) => setTimeout(resolve, 2000))
      } catch (e) {
        console.warn(e)
      } finally {
        setReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = React.useCallback(async () => {
    if (ready || fonts) {
      await SplashScreen.hideAsync()
    }
  }, [ready, fonts])

  if (!ready && !fonts) {
    return null
  }

  return (
    <View style={styles.layout} onLayout={onLayoutRootView}>
      <StatusBar style="light" translucent />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'transparent',
          },
          animation: 'fade',
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="register" />
        <Stack.Screen name="update" />
      </Stack>
    </View>
  )
}

export default Layout
