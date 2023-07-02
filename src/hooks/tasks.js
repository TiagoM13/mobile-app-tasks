import React from 'react'
import { Alert } from 'react-native'
import { useRouter } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { getHours } from '@/utils/getHours'

export const useTasks = () => {
  const router = useRouter()
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
      console.log('Error loading tasks', err)
    }
  }

  // Save tasks the AsyncStorage
  const saveTasks = async (newTasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(newTasks))
      setTasks(newTasks)
    } catch (err) {
      console.log('Error saving task', err)
    }
  }

  // Create Task
  const createTask = async (description) => {
    const newTask = {
      id,
      time: currentTime,
      description,
      checked: false,
    }

    const updateTasks = [...tasks, newTask]

    try {
      await saveTasks(updateTasks)

      Alert.alert('Task added', 'New task added successfully!', [
        {
          text: 'ok',
          onPress: () => router.push('/'),
        },
      ])
    } catch (err) {
      Alert.alert('Error adding task', 'Could not add task')

      console.log('Error creating task', err)
    }
  }

  // Delete Task
  const deleteTask = async (taskId) => {
    const updateTasks = tasks.filter((task) => task.id !== taskId)

    try {
      await saveTasks(updateTasks)
      console.log('Task removed successfully')
    } catch (err) {
      console.log('Error removing task', err)
    }
  }

  // Update Tasks
  const updateTask = async (id, description, checked) => {
    const updatedTask = {
      id,
      time: currentTime,
      description,
      checked,
    }

    const updatedTasks = tasks.map((task) =>
      task.id === id ? updatedTask : task,
    )

    try {
      await saveTasks(updatedTasks)

      Alert.alert('Task updated', 'Task updated successfully!', [
        {
          text: 'ok',
          onPress: () => router.push('/'),
        },
      ])
    } catch (err) {
      Alert.alert('Error updating task', 'Unable to update task')
      console.log('Error updating task', err)
    }
  }

  // toggle checkbox
  const toggleCheckedTask = async (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, checked: !task.checked } : task,
    )

    try {
      await saveTasks(updatedTasks)
      console.log('Updated task status')
    } catch (err) {
      console.log('Error updating task status', err)
    }
  }

  return {
    tasks,
    loadTasks,
    createTask,
    deleteTask,
    updateTask,
    toggleCheckedTask,
  }
}
