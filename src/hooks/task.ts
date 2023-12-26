import { store } from '@/store/tasks'

export const useTasks = () => {
  const { list, loading, loadError } = store.useState((s) => s.tasks)

  return { list, loading, loadError }
}

export const useTask = () => {
  const { data, loading, loadError } = store.useState((s) => s.task)

  return { data, loading, loadError }
}
