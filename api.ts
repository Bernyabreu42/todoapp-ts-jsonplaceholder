import { Itask } from './types/tasks'
const baseUrl = 'http://localhost:4000'

export const getAllTodos = async (): Promise<Itask[]> => {
  const res = await fetch(`${baseUrl}/tasks`, { cache: 'no-store' })
  const todos = await res.json()
  return todos
}
export const addTodo = async (todo: Itask): Promise<Itask> => {
  const res = await fetch(`${baseUrl}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
  const newTodos = await res.json()
  return newTodos
}

export const editTodo = async (todo: Itask): Promise<Itask> => {
  const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
  const updateTodo = await res.json()
  return updateTodo
}

export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/tasks/${id}`, {
    method: 'DELETE'
  })
}
