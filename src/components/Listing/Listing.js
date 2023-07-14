import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import { Item } from '../Item/Item'
import { SearchInput } from '../SearchInput/SearchInput'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'

import { useTaskContext } from '@/hooks/taskContext'

import { styles } from './styles'

export function Listing() {
  const [searchTerm, setSearchTerm] = React.useState('')
  const { tasks, filterTasks, filteredTasks } = useTaskContext()

  React.useEffect(() => {
    filterTasks(searchTerm)
  }, [tasks, searchTerm])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Today’s tasks</Text>

      <SearchInput value={searchTerm} onChange={setSearchTerm} />

      {tasks.length === 0 && <ErrorMessage text="No tasks created." />}

      {filteredTasks.length === 0 && <ErrorMessage text="No tasks found." />}

      <ScrollView
        style={{ marginTop: 20 }}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {filteredTasks.map((task) => (
          <Item
            key={task.id}
            id={task.id}
            time={task.time}
            description={task.description}
            checked={task.checked}
          />
        ))}
      </ScrollView>
    </View>
  )
}
