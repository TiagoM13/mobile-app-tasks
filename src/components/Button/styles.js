import { StyleSheet } from 'react-native'
import THEME from '@/theme'

export const styles = StyleSheet.create({
  button: {
    backgroundColor: THEME.COLORS.YELLOW,
    height: 40,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    fontFamily: THEME.FONTS.BOLD,
    color: THEME.COLORS.WHITE,
  },
  back: {
    backgroundColor: THEME.COLORS.YELLOW,
    width: 50,
    height: 50,
    borderRadius: 99999,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
})
