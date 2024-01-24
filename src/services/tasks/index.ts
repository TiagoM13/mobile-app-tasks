import { ITask } from '@/entities/task'
import { ms } from '@/services/api'

export const getAllTasksService = async () => {
  const { data } = await ms.get<ITask[]>('/tasks')

  return data
}

export const getTaskService = async (id: string) => {
  const { data } = await ms.get<ITask>(`/tasks/${id}`)

  return data
}

export const createTaskService = async (task: ITask) => {
  const { data } = await ms.post<ITask>('/tasks', task)

  return data
}

export const updateTaskService = async (id: string, task: ITask) => {
  const { data } = await ms.put<ITask>(`/tasks/${id}`, task)

  return data
}

export const toggleTaskStatusService = async (id: string) => {
  const { data } = await ms.put<ITask>(`/tasks/${id}/toggle-status`)

  return data
}

export const deleteTaskService = async (id: string) => {
  const { data } = await ms.delete<ITask>(`/tasks/${id}`)

  return data
}
