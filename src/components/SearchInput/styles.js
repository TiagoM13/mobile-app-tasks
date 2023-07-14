import { StyleSheet } from 'react-native'

import THEME from '@/theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.WHITE,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: THEME.COLORS.YELLOW,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    marginLeft: 20,
    fontSize: 16,
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLORS.BLACK,
  },
})
