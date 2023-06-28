import { StyleSheet } from 'react-native'

import THEME from '../../src/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
