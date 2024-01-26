import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import THEME from '@/theme'

type Props = {
  size: number
  color?: string
  focused: boolean
}

const ButtonPlus = ({ size, focused }: Props) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: focused ? '#DAB737' : THEME.COLORS.YELLOW },
      ]}
    >
      <Entypo name="plus" size={size} color={THEME.COLORS.WHITE} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
})

export default ButtonPlus
