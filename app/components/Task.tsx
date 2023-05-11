'use client'
import { Itask } from '@/types/tasks'
import React, { FormEventHandler, useState } from 'react'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import { Modal } from './Modal'
import { useRouter } from 'next/navigation'
import { deleteTodo, editTodo } from '@/api'

interface TaskProps {
  task:Itask
}

export const Task: React.FC<TaskProps> = ({ task }) => {
  const [openEditModal, setOpenEditModal] = useState<boolean>(false)
  const [openDeleteTask, setOpenDeleteTask] = useState<boolean>(false)
  const [editNewValueTodo, setEditNewValueTodo] = useState<string>(task.text)

  const router = useRouter()

  const handlerEditForm: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    await editTodo({
      id: task.id,
      text: editNewValueTodo
    })

    setOpenEditModal(false)
    router.refresh()
  }

  const handlerDeleteTodo = async () => {
    await deleteTodo(task.id)
    router.refresh()
    setOpenDeleteTask(false)
  }

  return (
    <tr>
      <td className='w-full'>{task.text}</td>
      <td className='flex gap-5'>
        <FiEdit onClick={() => setOpenEditModal(true)} cursor='pointer' className='text-blue-500' size={25} />
        <Modal modalOpen={openEditModal} setModalOpen={setOpenEditModal}>
          <form onSubmit={handlerEditForm}>
            <h3 className='font-bold text-lg'>Edit task</h3>
            <fieldset className='modal-action'>
              <input
                type='text'
                placeholder='Type here'
                value={editNewValueTodo}
                onChange={(e) => setEditNewValueTodo(e.target.value)}
                className='input input-bordered w-full'
              />

              <button className='btn ' type='submit'>Guardar</button>
            </fieldset>
          </form>
        </Modal>
        <FiTrash2 onClick={() => setOpenDeleteTask(true)} cursor='pointer' className='text-red-500' size={25} />
        <Modal modalOpen={openDeleteTask} setModalOpen={setOpenDeleteTask}>
          <div className='flex flex-col gap-5'>
            <h3 className='font-bold text-lg'>Delete task</h3>
            <button onClick={handlerDeleteTodo} className='btn' type='submit'>Delete</button>
          </div>
        </Modal>
      </td>
    </tr>
  )
}
