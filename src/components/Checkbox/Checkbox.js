import { View, TouchableOpacity } from 'react-native'
import { Foundation } from '@expo/vector-icons'

import { styles } from './styles'

export function Checkbox(props) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onCheck}>
      {props.checked ? (
        <View style={styles.checked}>
          <Foundation name="check" size={22} color="white" />
        </View>
      ) : (
        <View style={styles.checkbox} />
      )}
    </TouchableOpacity>
  )
}
