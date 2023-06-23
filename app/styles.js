import { StyleSheet } from 'react-native'

import THEME from '../theme'

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
})
