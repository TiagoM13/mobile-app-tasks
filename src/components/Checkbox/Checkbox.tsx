import { View, TouchableOpacity } from 'react-native'
import { Foundation } from '@expo/vector-icons'

import { StatusTask } from '@/entities/task'

import { styles } from './styles'

interface CheckboxProps {
  checked?: StatusTask
  onCheck: () => void
}

export const Checkbox = ({ checked, onCheck }: CheckboxProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onCheck}>
      {checked === StatusTask.COMPLETED ? (
        <View style={styles.checked}>
          <Foundation name="check" size={22} color="white" />
        </View>
      ) : (
        <View style={styles.checkbox} />
      )}
    </TouchableOpacity>
  )
}
