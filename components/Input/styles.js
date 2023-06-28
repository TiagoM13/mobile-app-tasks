import { StyleSheet } from 'react-native'
import THEME from '../../theme'

export const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: THEME.COLORS.YELLOW,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLORS.WHITE,
  },
})
