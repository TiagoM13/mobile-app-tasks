/* eslint-disable prettier/prettier */
import { ITask } from '@/entities/task'
import { createTaskService, deleteTaskService, getAllTasksService, getTaskService } from '@/services/tasksServices'
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

export const refreshTask = async (id: string) => {
  try {
    store.update((s) => {
      s.task.loading = true
      s.task.loadError = false
    })

    const response = await getTaskService(id)

    store.update(s => {
      s.task.data = response
      s.task.loading = false
    })

    return response
  } catch (err: unknown) {
    store.update((s) => {
      s.task.loading = false
      s.task.loadError = true
    })

    throw err
  }
}

export const createTask = async (task: ITask) => {
  try {
    store.update(s => {
      s.task.loading = true
      s.task.loadError = false
    })

    const response = await createTaskService(task)

    store.update(s => {
      s.task.data = response
      s.task.loading = false
    })

    return response
  } catch (err) {
    store.update((s) => {
      s.task.loading = false;
      s.task.loadError = true;
    });

    throw err;
  }
}

export const deleteTask = async (id: string) => {
  try {
    store.update(s => {
      s.task.loading = true
      s.task.loadError = false
    })

    const response = await deleteTaskService(id)

    store.update(s => {
      s.task.data = response
      s.tasks.loading = false
    })

    return response
  } catch (err) {
    store.update((s) => {
      s.task.loading = false;
      s.task.loadError = true;
    });

    throw err;
  }
} 
