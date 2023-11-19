/* eslint-disable prettier/prettier */
import { getAllTasksService } from '@/services/tasksServices'
import { store } from '@/store/tasks'

export const refreshTasks = async () => {
  try {
    store.update((s) => {
      s.tasks.loading = true
      s.tasks.loadError = false
    })

    const response = await getAllTasksService()

    store.update(s => {
      s.tasks.list = response
      s.tasks.loading = false
    })

    return response
  } catch (err: unknown) {
    store.update((s) => {
      s.tasks.loading = false
      s.tasks.loadError = true
    })

    throw err
  }
}
