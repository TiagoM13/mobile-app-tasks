import React from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'

import { ViewContent } from '@/styles'

import THEME from '@/theme'

export const Text = styled.Text`
  color: ${THEME.COLORS.WHITE};
  font-size: 18px;
  line-height: 24px;
  font-family: ${THEME.FONTS.BOLD};
  margin-top: 20px;
`

function Loading() {
  return (
    <ViewContent>
      <ActivityIndicator size={40} color={THEME.COLORS.YELLOW} />

      <Text>Loading tasks...</Text>
    </ViewContent>
  )
}

export default Loading
