import { StyleSheet } from 'react-native'

import { StatusTask } from '@/entities/task'

import THEME from '@/theme'

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

type Props = {
  status?: StatusTask
}

export const text = ({ status }: Props) =>
  StyleSheet.create({
    description: {
      color:
        status === 'completed' ? THEME.COLORS.WHITE_300 : THEME.COLORS.WHITE,
      fontSize: 16,
      lineHeight: 16,
      fontWeight: '400',
      fontFamily: THEME.FONTS.REGULAR,
      textDecorationLine: status === 'completed' ? 'line-through' : 'none',
    },
  })
