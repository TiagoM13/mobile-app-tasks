import { store } from '@/store/tasks'
import { refreshTask, refreshTasks } from '@/store/tasks/actions'

export const useTasks = () => {
  const { list, loading, loadError } = store.useState((s) => s.tasks)

  return { list, loading, loadError, refresh: refreshTasks }
}

export const useTask = () => {
  const { data, loading, loadError } = store.useState((s) => s.task)

  return { data, loading, loadError, refresh: refreshTask }
}
