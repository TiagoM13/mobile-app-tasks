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
  try {
    const { data } = await ms.post<ITask>('/tasks', task)

    return data
  } catch (err) {
    console.error('Erro ao criar a tarefa:', err)

    throw err
  }
}

export const deleteTaskService = async (id: string) => {
  const { data } = await ms.delete<ITask>(`/tasks/${id}`)

  return data
}
