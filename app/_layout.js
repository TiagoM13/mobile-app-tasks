import { SplashScreen, Stack } from 'expo-router'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { StatusBar } from 'expo-status-bar'
import { View, StyleSheet } from 'react-native'

export default function Layout() {
  const [fonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  if (!fonts) {
    return <SplashScreen />
  }

  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 16
  },
})
