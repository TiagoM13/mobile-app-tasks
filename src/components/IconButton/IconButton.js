import { TouchableOpacity } from 'react-native'

export function IconButton(props) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.action}>
      {props.icon}
    </TouchableOpacity>
  )
}
