import { View, Image, Text } from 'react-native'

import ImgProfile from '../../assets/tiago-mota.jpg'

import { styles } from './styles'

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={ImgProfile} alt="Profile image" style={styles.image} />
        <Text style={styles.text}>Good evening, Tiago</Text>
      </View>
    </View>
  )
}
