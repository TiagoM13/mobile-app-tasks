import React from 'react'
import { SafeAreaView, FlatList } from 'react-native'

import { Header } from '@/components/Header/Header'
import { SearchInput } from '@/components/SearchInput/SearchInput'
import { ErrorMessage } from '@/components/ErrorMessage/ErrorMessage'
import { Item } from '@/components/Item/Item'
import Loading from '@/components/Loading'

import { useTasks } from '@/hooks/task'
import { refreshTasks } from '@/store/tasks/actions'

import { Title, ViewContainer } from '@/styles'

export default function Tasks() {
  const { loading, loadError, list } = useTasks()

  const [searchTerm, setSearchTerm] = React.useState('')

  React.useEffect(() => {
    refreshTasks()
  }, [])

  return (
    <ViewContainer>
      <Header />
      <Title>Today’s tasks</Title>
      <SearchInput value={searchTerm} onChange={() => setSearchTerm} />

      {loadError && <ErrorMessage text="Error loading tasks" />}

      {loading ? (
        <Loading />
      ) : (
        <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
          <FlatList
            data={list}
            renderItem={({ item, index }) => <Item key={index} task={item} />}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100 }}
          />
        </SafeAreaView>
      )}
    </ViewContainer>
  )
}
