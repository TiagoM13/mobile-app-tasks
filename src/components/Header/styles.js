import { StyleSheet } from 'react-native'

import THEME from '../../theme'

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  image: {
    width: 70,
    height: 70,
    marginBottom: 10,
    borderRadius: 9999,
  },
  text: {
    color: THEME.COLORS.WHITE,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '400',
    fontFamily: THEME.FONTS.REGULAR,
  },
})
