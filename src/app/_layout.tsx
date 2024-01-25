import React from 'react'
import { Slot } from 'expo-router'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import Entypo from '@expo/vector-icons/Entypo'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'

import { ContainerNavigatorRoot } from '@/styles'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

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
    <GestureHandlerRootView onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <ContainerNavigatorRoot>
        <StatusBar style="light" translucent />
        <Slot />
      </ContainerNavigatorRoot>
    </GestureHandlerRootView>
  )
}

export default Layout
