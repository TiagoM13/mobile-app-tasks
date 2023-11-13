import { View, TouchableOpacity } from 'react-native'
import { Foundation } from '@expo/vector-icons'

import { styles } from './styles'
import { Status } from '@/enums/status'

interface CheckboxProps {
  checked: boolean
  onCheck: () => void
}

export const Checkbox = ({ checked, onCheck }: CheckboxProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onCheck}>
      {checked ? (
        <View style={styles.checked}>
          <Foundation name="check" size={22} color="white" />
        </View>
      ) : (
        <View style={styles.checkbox} />
      )}
    </TouchableOpacity>
  )
}
