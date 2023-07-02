import { View, Image, Text } from 'react-native'

import ImgProfile from '@/assets/tiago-mota.jpg'

import { styles } from './styles'
import { getSchedule } from '@/utils/getSchedule'

export function Header() {
  const { greeting } = getSchedule()

  return (
    <View style={styles.container}>
      <View>
        <Image source={ImgProfile} alt="Profile image" style={styles.image} />
        <Text style={styles.text}>{greeting}, Tiago</Text>
      </View>
    </View>
  )
}
