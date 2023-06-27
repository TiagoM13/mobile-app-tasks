import React from 'react'
import { Text, View } from 'react-native'
import { useRouter } from 'expo-router'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

import { Button } from '../Buttton/Button'
import { Checkbox } from '../Checkbox/Checkbox'
import { useTaskContext } from '../../hooks/taskContext'

import THEME from '../../theme'
import { styles, text } from './styles'

export function Item(props) {
  const router = useRouter()
  const { deleteTask } = useTaskContext()
  const [checked, setChecked] = React.useState(false)

  function toggleCheckedItem() {
    setChecked(!checked)
  }

  function handleDeleteTask() {
    deleteTask(props.id)
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Checkbox checked={checked} onCheck={toggleCheckedItem} />

        <View style={styles.textContent}>
          <Text style={styles.time}>{props.time}</Text>
          <Text style={text({ checked }).description}>{props.description}</Text>
        </View>
      </View>

      {/* buttons */}
      <View style={styles.buttonsContent}>
        {/* button edit */}
        <Button
          action={() =>
            router.push({
              pathname: 'update',
              params: { id: props.id, description: props.description },
            })
          }
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
          action={handleDeleteTask}
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
