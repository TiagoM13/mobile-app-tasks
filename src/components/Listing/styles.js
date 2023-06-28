import { StyleSheet } from 'react-native'

import THEME from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: THEME.COLORS.WHITE,
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 24,
    lineHeight: 24,
    fontWeight: 600,
    marginBottom: 20,
  },
})
