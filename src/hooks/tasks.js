import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { getHours } from '@/utils/getHours'

export const useTasks = () => {
  const { currentTime } = getHours()
  const [tasks, setTasks] = React.useState([])

  const id =
    tasks.length > 0 ? Math.ceil(tasks[tasks.length - 1].id + Math.random()) : 1

  // Load Tasks
  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('tasks')
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks))
      }
    } catch (err) {
      console.log('Erro ao carregar as tarefas', err)
    }
  }

  // Save tasks the AsyncStorage
  const saveTasks = async (newTasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(newTasks))
      setTasks(newTasks)
    } catch (err) {
      console.log('Erro ao salvar tarefa', err)
    }
  }

  // Create Task
  const createTask = async (description) => {
    const newTask = {
      id,
      time: currentTime,
      description,
    }

    const updateTasks = [...tasks, newTask]

    try {
      await saveTasks(updateTasks)
      console.log('Nova tarefa adicionada:', newTask)
    } catch (err) {
      console.log('Erro ao criar tarefa', err)
    }
  }

  // Delete Task
  const deleteTask = async (taskId) => {
    const updateTasks = tasks.filter((task) => task.id !== taskId)

    try {
      await saveTasks(updateTasks)
      console.log('Dados removidos com sucesso!', taskId)
    } catch (err) {
      console.log('Erro ao remover os dados:', err)
    }
  }

  // Update Tasks
  const updateTask = async (id, description) => {
    const updatedTask = {
      id,
      time: currentTime,
      description,
    }

    const updatedTasks = tasks.map((task) =>
      task.id === id ? updatedTask : task,
    )

    try {
      await saveTasks(updatedTasks)
      console.log('Tarefa atualizada com sucesso', { updatedTask })
    } catch (err) {
      console.log('Erro ao atualizar tarefa', err)
    }
  }

  return { tasks, loadTasks, createTask, deleteTask, updateTask }
}
