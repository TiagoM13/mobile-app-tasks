import React from 'react'
import { Text, View } from 'react-native'
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from '@expo/vector-icons'

import { Button } from '../Buttton/Button'

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
        <Button
          action={() => console.log('Edit Item')}
          icon={
            <MaterialCommunityIcons
              name="playlist-edit"
              size={25}
              color={THEME.COLORS.YELLOW}
            />
          }
        />

        {/* button delete */}
        <Button
          action={() => console.log('Delete Item')}
          icon={
            <MaterialIcons
              name="delete"
              size={25}
              color={THEME.COLORS.YELLOW}
            />
          }
        />
      </View>
    </View>
  )
}
