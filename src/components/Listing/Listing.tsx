import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import { Item } from '../Item/Item'
import { SearchInput } from '../SearchInput/SearchInput'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'

import { useTaskContext } from '@/hooks/taskContext'

import { styles } from './styles'
import { ITask } from '@/entities/task'

export function Listing() {
  const [searchTerm, setSearchTerm] = React.useState('')
  // const { filterTasks, filteredTasks } = useTaskContext()

  // React.useEffect(() => {
  //   filterTasks(searchTerm)
  // }, [tasks, searchTerm])

  const task: ITask = {
    id: '121233',
    title: 'Teste',
    created_at: '11/11/2023',
    status: 'pending',
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Today’s tasks</Text>

      <SearchInput value={searchTerm} onChange={() => setSearchTerm} />

      {/* {tasks.length === 0 && <ErrorMessage text="No tasks created." />} */}

      {/* {!!searchTerm && filteredTasks.length === 0 && (
        <ErrorMessage text="No tasks found." />
      )} */}

      <ScrollView
        style={{ marginTop: 20 }}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* {filteredTasks.map((task) => ( */}
        <Item key={Number(task.id)} task={task} />
        {/* ))} */}
      </ScrollView>
    </View>
  )
}
