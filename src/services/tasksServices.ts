import { ITask } from '@/entities/task'
import { ms } from '@/services/api'

export const getAllTasksService = async () => {
  const { data } = await ms.get<ITask[]>('/tasks')

  return data
}
