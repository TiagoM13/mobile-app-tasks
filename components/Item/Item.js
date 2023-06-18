import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from '@expo/vector-icons'

import THEME from '../../theme'
import { styles } from './styles'

export function Item(props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Ionicons name="md-checkbox" size={30} color={THEME.COLORS.YELLOW} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.time}>{props.time}</Text>
          <Text style={styles.description}>{props.description}</Text>
        </View>
      </View>

      {/* buttons */}
      <View style={styles.contentContainer}>
        {/* button edit */}
        <TouchableOpacity activeOpacity={0.7}>
          <MaterialCommunityIcons
            name="playlist-edit"
            size={25}
            color={THEME.COLORS.YELLOW}
          />
        </TouchableOpacity>

        {/* button delete */}
        <TouchableOpacity activeOpacity={0.7}>
          <MaterialIcons name="delete" size={25} color={THEME.COLORS.YELLOW} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
