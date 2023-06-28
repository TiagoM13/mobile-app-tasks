import { StyleSheet } from 'react-native'
import THEME from '../../theme'

export const styles = StyleSheet.create({
  button: {
    backgroundColor: THEME.COLORS.YELLOW,
    height: 40,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 18,
    fontFamily: THEME.FONTS.BOLD,
    color: THEME.COLORS.WHITE,
  },
})
