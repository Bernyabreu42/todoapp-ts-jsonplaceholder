import { Itask } from '@/types/tasks'
import React from 'react'
import { Task } from './Task'

interface TodoListProps {
  tasks: Itask[]
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='table w-full'>
        {/* head */}
        <thead>
          <tr>
            <th className='w-full'>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map(task => <Task key={task.id} task={task} />)
          }
        </tbody>
      </table>
    </div>
  )
}

TodoList.propTypes = {}

export default TodoList
