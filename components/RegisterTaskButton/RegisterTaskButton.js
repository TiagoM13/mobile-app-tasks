import { TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'

import { styles } from './styles'
import THEME from '../../theme'
import { useRouter } from 'expo-router'

export function RegisterTaskButton() {
  const router = useRouter()

  const openRegisterTask = () => {
    router.push('/register')
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={openRegisterTask}
      activeOpacity={0.7}
    >
      <Entypo name="plus" size={45} color={THEME.COLORS.WHITE} />
    </TouchableOpacity>
  )
}
