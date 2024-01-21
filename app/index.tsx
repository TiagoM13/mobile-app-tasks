import React from 'react'
import { useRouter } from 'expo-router'
import { View, Text, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'

import { Header } from '@/components/Header/Header'
import { Listing } from '@/components/Listing/Listing'
import { SearchInput } from '@/components/SearchInput/SearchInput'

import { useTasks } from '@/hooks/task'
import { refreshTasks } from '@/store/tasks/actions'

import THEME from '@/theme'
import { styles } from './styles'

const App = () => {
  const { loading, loadError, list } = useTasks()

  const router = useRouter()
  const [searchTerm, setSearchTerm] = React.useState('')

  const registerTask = () => {
    router.push('/register')
  }

  React.useEffect(() => {
    refreshTasks()
  }, [])

  return (
    <View style={styles.app}>
      <Header />
      <Text style={styles.text}>Today’s tasks</Text>

      <SearchInput value={searchTerm} onChange={() => setSearchTerm} />

      <Listing list={list} loading={loading} loadError={loadError} />

      <TouchableOpacity
        style={styles.container}
        onPress={registerTask}
        activeOpacity={0.7}
      >
        <Entypo name="plus" size={45} color={THEME.COLORS.WHITE} />
      </TouchableOpacity>
    </View>
  )
}

export default App
