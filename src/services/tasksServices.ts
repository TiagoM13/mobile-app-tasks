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
