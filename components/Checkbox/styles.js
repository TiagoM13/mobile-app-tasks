import { StyleSheet } from 'react-native'

import THEME from '../../theme'

export const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: THEME.COLORS.YELLOW,
    borderRadius: 4,
  },
  checked: {
    width: 24,
    height: 24,
    backgroundColor: THEME.COLORS.YELLOW,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
