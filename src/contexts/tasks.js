/* eslint-disable prettier/prettier */
import React from 'react'
import { useTasks } from '@/hooks/tasks'

const TaskContext = React.createContext({
  tasks: [],
  filteredTasks: [],
  createTask: () => { },
  deleteTask: () => { },
  updateTask: () => { },
  toggleCheckedTask: () => { },
  filterTasks: () => { },
})

const TaskProvider = ({ children }) => {
  const { loadTasks, tasks, createTask, deleteTask, updateTask, toggleCheckedTask, filteredTasks, filterTasks } = useTasks()

  React.useEffect(() => {
    loadTasks()
  }, [])

  return (
    <TaskContext.Provider value={{ tasks, filteredTasks, createTask, deleteTask, updateTask, toggleCheckedTask, filterTasks, }}>
      {children}
    </TaskContext.Provider>
  )
}

export { TaskProvider, TaskContext }