'use client'

import { AiOutlinePlus } from 'react-icons/ai'
import { Modal } from './Modal'
import { FormEventHandler, useState } from 'react'
import { addTodo } from '@/api'
import { useRouter } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid'

export const AddTask = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [newTaskValue, setNewTaskValue] = useState('')

  const router = useRouter()

  const handlerForm: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    await addTodo({
      id: uuidv4(),
      text: newTaskValue
    })
    setNewTaskValue('')
    setModalOpen(false)
    router.refresh()
  }

  return (
    <div>
      <button onClick={() => setModalOpen(true)} className='btn btn-primary w-full flex gap-2'>
        Add new task <AiOutlinePlus size={18} />
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handlerForm}>
          <h3 className='font-bold text-lg'>Add new task</h3>
          <fieldset className='modal-action'>
            <input
              type='text'
              placeholder='Type here'
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
              className='input input-bordered w-full'
            />

            <button className='btn ' type='submit'>Crear</button>
          </fieldset>
        </form>
      </Modal>
    </div>
  )
}
