import { StyleSheet } from 'react-native'
import THEME from '../../theme'

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
  icon: {
    backgroundColor: THEME.COLORS.YELLOW,
    width: 50,
    height: 50,
    borderRadius: 99999,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: THEME.COLORS.YELLOW,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLORS.WHITE,
  },
  button: {
    backgroundColor: THEME.COLORS.YELLOW,
    height: 40,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 18,
    fontFamily: THEME.FONTS.BOLD,
    color: THEME.COLORS.WHITE,
  },
})
