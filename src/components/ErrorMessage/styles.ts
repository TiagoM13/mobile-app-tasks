import { StyleSheet } from 'react-native'

import THEME from '@/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  empty: {
    color: THEME.COLORS.WHITE,
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
  },
})
