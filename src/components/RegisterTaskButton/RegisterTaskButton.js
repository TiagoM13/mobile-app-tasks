import { TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import { Entypo } from '@expo/vector-icons'

import THEME from '@/theme'
import { styles } from './styles'

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
