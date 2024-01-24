/* eslint-disable prettier/prettier */
import { ITask } from '@/entities/task'
import {
  createTaskService,
  deleteTaskService,
  getAllTasksService,
  getTaskService,
  toggleTaskStatusService,
  updateTaskService
} from '@/services/tasks'
import { store } from '@/store/tasks'

export const refreshTasks = async () => {
  try {
    store.update((s) => {
      s.tasks.list = []
      s.tasks.loading = true
      s.tasks.loadError = false
    })

    const response = await getAllTasksService()

    store.update(s => {
      s.tasks.list = response
    })

    return response
  } catch (err: unknown) {
    store.update((s) => {
      s.tasks.loadError = true
    })

    throw err
  } finally {
    store.update(s => {
      s.tasks.loading = false
    })
  }
}

export const refreshTask = async (id: string) => {
  try {
    store.update((s) => {
      s.task.data = undefined
      s.task.loading = true
      s.task.loadError = false
    })

    const response = await getTaskService(id)

    store.update(s => {
      s.task.data = response
    })

    return response
  } catch (err: unknown) {
    store.update((s) => {
      s.task.loadError = true
    })

    throw err
  } finally {
    store.update(s => {
      s.task.loading = false
    })
  }
}

export const createTask = async (task: ITask) => {
  try {
    store.update(s => {
      s.task.data = undefined
      s.task.loading = true
      s.task.loadError = false
    })

    const response = await createTaskService(task)

    store.update(s => {
      s.tasks.list.push(response)
    })

    return response
  } catch (err) {
    store.update((s) => {
      s.task.loadError = true;
    });

    throw err;
  } finally {
    store.update((s) => {
      s.task.loading = false;
    });
  }
}

export const updateTask = async (id: string, task: ITask) => {
  try {
    store.update(s => {
      s.task.data = undefined
      s.task.loading = true
      s.task.loadError = false
    })

    const response = await updateTaskService(id, task)

    store.update(s => {
      const index = s.tasks.list.findIndex((item) => item.id === id);
      s.tasks.list[index] = response
    })

    return response
  } catch (err) {
    store.update((s) => {
      s.task.loadError = true;
    });

    throw err
  } finally {
    store.update((s) => {
      s.task.loading = false;
    });
  }
}

export const toggleTaskStatus = async (id: string) => {
  try {
    store.update(s => {
      s.task.data = undefined
      s.task.loading = true
      s.task.loadError = false;
    })

    const response = await toggleTaskStatusService(id)

    store.update(s => {
      const index = s.tasks.list.findIndex(item => item === id)
      s.tasks.list[index] = response
    })

    return response
  } catch (err) {
    store.update((s) => {
      s.task.loadError = true;
    });

    throw err
  } finally {
    store.update((s) => {
      s.task.loading = false;
    });
  }
}

export const deleteTask = async (id: string) => {
  try {
    store.update(s => {
      s.task.data = undefined
      s.task.loading = true
      s.task.loadError = false
    })

    await deleteTaskService(id)

    store.update(s => {
      const index = s.tasks.list.findIndex((item) => item.id === id);
      if (index >= 0) s.tasks.list.splice(index, 1)
    })

    return id
  } catch (err) {
    store.update((s) => {
      s.task.loadError = true;
    });

    throw err;
  } finally {
    store.update(s => {
      s.task.loading = false
    })
  }
} 
