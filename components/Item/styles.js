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
  textContent: {
    justifyContent: 'space-between',
    gap: 15,
    width: 275,
  },
  buttonsContent: {
    gap: 15,
  },
  time: {
    color: THEME.COLORS.WHITE,
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '400',
    fontFamily: THEME.FONTS.REGULAR,
  },
})

export const text = ({ checked }) =>
  StyleSheet.create({
    description: {
      color: checked ? THEME.COLORS.WHITE_300 : THEME.COLORS.WHITE,
      fontSize: 16,
      lineHeight: 16,
      fontWeight: '400',
      fontFamily: THEME.FONTS.REGULAR,
      textDecorationLine: checked ? 'line-through' : 'none',
    },
  })
