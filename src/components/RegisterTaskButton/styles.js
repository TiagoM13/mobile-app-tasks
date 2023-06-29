import { StyleSheet } from 'react-native'
import THEME from '@/theme'

export const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 20,
    right: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999999,
    backgroundColor: THEME.COLORS.YELLOW,
  },
})
