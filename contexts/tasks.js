/* eslint-disable prettier/prettier */
import React from 'react'
import { useTasks } from '../hooks/tasks'

const TaskContext = React.createContext({
  tasks: [],
  createTask: () => { },
  deleteTask: () => { },
  updateTask: () => { }
})

const TaskProvider = ({ children }) => {
  const { loadTasks, tasks, createTask, deleteTask } = useTasks()

  React.useEffect(() => {
    loadTasks()
  }, [])

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export { TaskProvider, TaskContext }