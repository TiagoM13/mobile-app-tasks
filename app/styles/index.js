import { StyleSheet } from 'react-native'

import THEME from '@/theme'

export const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: THEME.COLORS.BLACK,
    paddingHorizontal: 16,
    position: 'relative',
  },
  app: {
    flex: 1,
    paddingTop: 60,
  },
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
