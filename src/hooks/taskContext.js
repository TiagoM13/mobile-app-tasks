import React from 'react'
import { TaskContext } from '@/contexts/tasks'

export const useTaskContext = () => {
  const context = React.useContext(TaskContext)

  if (!context) {
    throw new Error('context must be used within a provider')
  }

  return context
}
