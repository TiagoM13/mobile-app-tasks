import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

import THEME from '@/theme'
import { styles } from './styles'

type ActionButtonProps = {
  actions: {
    update?: () => void
    delete?: () => void
  }
  disabled?: boolean
}

export const ActionButton = ({ actions, disabled }: ActionButtonProps) => {
  return (
    <View style={styles.buttonsContent}>
      {/* button edit */}
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.7}
        onPress={actions.update}
      >
        <MaterialCommunityIcons
          name="playlist-edit"
          size={25}
          color={disabled ? THEME.COLORS.WHITE_300 : THEME.COLORS.YELLOW}
        />
      </TouchableOpacity>

      {/* button delete */}
      <TouchableOpacity activeOpacity={0.7} onPress={actions.delete}>
        <MaterialIcons name="delete" size={25} color={THEME.COLORS.YELLOW} />
      </TouchableOpacity>
    </View>
  )
}
