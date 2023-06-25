import { StyleSheet } from 'react-native'

import THEME from '../../theme'

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: THEME.COLORS.WHITE_300,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  contentContainer: {
    justifyContent: 'space-between',
    gap: 15,
    width: 280,
  },
  time: {
    color: THEME.COLORS.WHITE,
    fontSize: 14,
    lineHeight: 15,
    fontWeight: '400',
    fontFamily: THEME.FONTS.REGULAR,
  },
})

export const text = ({ checked }) =>
  StyleSheet.create({
    description: {
      color: checked ? THEME.COLORS.WHITE_300 : THEME.COLORS.WHITE,
      fontSize: 18,
      lineHeight: 20,
      fontWeight: '700',
      fontFamily: THEME.FONTS.REGULAR,
      textDecorationLine: checked ? 'line-through' : 'none',
    },
  })
