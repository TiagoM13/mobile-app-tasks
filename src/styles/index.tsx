import { styled } from 'styled-components/native'
import THEME from '@/theme'

export const ContainerNavigatorRoot = styled.View`
  flex: 1;
  background-color: ${THEME.COLORS.BLACK};
`

export const ViewContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const ViewContainer = styled.View`
  flex: 1;
  padding: 60px 10px 0;
  background-color: ${THEME.COLORS.BLACK};
`

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.Text`
  color: ${THEME.COLORS.WHITE};
  font-family: ${THEME.FONTS.BOLD};
  font-size: 24px;
  line-height: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`
