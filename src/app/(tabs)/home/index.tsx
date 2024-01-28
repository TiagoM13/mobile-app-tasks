import React from 'react'
import { SafeAreaView, FlatList } from 'react-native'

import { Header } from '@/components/Header/Header'
import { Search } from '@/components/Search'
import { Message } from '@/components/Message/Message'
import { Item } from '@/components/Item/Item'
import Loading from '@/components/Loading'

import { useTasks } from '@/hooks/task'
import { refreshTasks } from '@/store/tasks/actions'

import { Title, ViewContainer } from '@/styles'

export default function Tasks() {
  const [query, setQuery] = React.useState('')
  const { loading, loadError, list } = useTasks()

  React.useEffect(() => {
    refreshTasks()
  }, [query])

  const filteredTasks = list.filter((task) =>
    task.title?.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <ViewContainer>
      <Header />
      <Title>Today’s tasks</Title>
      <Search value={query} onChange={setQuery} />

      {loadError && <Message text="Error loading tasks" />}

      {filteredTasks.length === 0 && !loading && !loadError && (
        <Message text="No tasks found" />
      )}

      {loading ? (
        <Loading />
      ) : (
        filteredTasks.length !== 0 && (
          <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
            <FlatList
              data={filteredTasks}
              renderItem={({ item, index }) => <Item key={index} task={item} />}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 100 }}
            />
          </SafeAreaView>
        )
      )}
    </ViewContainer>
  )
}
