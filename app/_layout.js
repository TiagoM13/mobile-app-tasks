import { SplashScreen, Stack } from 'expo-router'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'

import { styles } from './styles'

export default function Layout() {
  const [fonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  if (!fonts) {
    return <SplashScreen />
  }

  return (
    <View style={styles.layout}>
      <StatusBar style="light" translucent />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'transparent',
          },
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
    </View>
  )
}
