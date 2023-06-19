import { TouchableOpacity } from 'react-native'

export function Button(props) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.action}>
      {props.icon}
    </TouchableOpacity>
  )
}
