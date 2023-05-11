import { getAllTodos } from '@/api'
import { AddTask } from './components/AddTask'
import TodoList from './components/TodoList'

export default async function Home () {
  const tasks = await getAllTodos()

  // console.log(tasks)

  return (
    <main className='max-w-4xl mx-auto mt4'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='underline'>TodoApp Next13 - JsonplaceHolder</h1>
        <AddTask />
      </div>
      <TodoList tasks={tasks} />
    </main>
  )
}
