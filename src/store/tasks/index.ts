import data from '@/database'
import { ITask } from '@/entities/task'
import { Store } from 'pullstate'

const tasks = data as ITask[]

export interface ITasksState {
  tasks: {
    list: ITask[]
    loading?: boolean
    loadError?: boolean
  }
  task: {
    data?: ITask
    loading?: boolean
    loadError?: boolean
  }
}

const defaultTasksState: ITasksState = {
  tasks: { list: tasks, loading: false },
  task: { loading: false },
}

export const store = new Store(defaultTasksState)

export const clean = () => {
  store.replace(defaultTasksState)
}

export default { store, clean, key: '@task' }
