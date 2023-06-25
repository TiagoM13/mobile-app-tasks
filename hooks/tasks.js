import React from 'react'
import { useRouter } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { getHours } from '../utils/getHours'

export const useTasks = () => {
  const route = useRouter()
  const { currentTime } = getHours()
  const [tasks, setTasks] = React.useState([])

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
      id: Number(tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1),
      time: currentTime,
      description,
    }

    const updateTasks = [...tasks, newTask]

    try {
      await saveTasks(updateTasks)
      console.log('Nova tarefa adicionada:', newTask)

      route.push('/')
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
  // const UpdateTasks = () => {}

  return { tasks, loadTasks, createTask, deleteTask }
}
