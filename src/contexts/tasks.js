/* eslint-disable prettier/prettier */
import React from 'react'
import { useTasks } from '@/hooks/tasks'

const TaskContext = React.createContext({
  tasks: [],
  createTask: () => { },
  deleteTask: () => { },
  updateTask: () => { }
})

const TaskProvider = ({ children }) => {
  const { loadTasks, tasks, createTask, deleteTask, updateTask } = useTasks()

  React.useEffect(() => {
    loadTasks()
  }, [])

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export { TaskProvider, TaskContext }