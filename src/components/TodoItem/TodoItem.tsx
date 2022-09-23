import React, { useState } from 'react';
import { ToDo } from  '../../model';
import { BsCircle } from 'react-icons/bs';
import checkIcon from '/icon-check.svg';
import './TodoItem.scss'

type Props = {
  todoItem: ToDo,
  todoList: ToDo[],
  setTodoList: React.Dispatch<React.SetStateAction<ToDo[]>>,
}

const TodoItem: React.FC<Props> = ({todoItem, todoList, setTodoList}) => {

  const handleDone = (id: number) => {
    setTodoList(todoList.map(todoItem => todoItem.id === id ? {...todoItem, completed:!todoItem.completed, active:!todoItem.active }: todoItem))
  }

  const handleCancel = (id: number) => {
    // console.log(id)
    setTodoList(todoList.filter(todoItem => todoItem.id !== id))
  }

  return (
    <div className='todoItem'>
        <div className='todoItem__description'>
          <div className='todoItem__img' onClick={() => handleDone(todoItem.id)}>
            {
              todoItem.completed ? (<img src="/icon-check.svg" alt="" className='todoItem__completedImg' />) : ""
            }
          </div>
          {
            todoItem.completed ? (<s>{todoItem.todo}</s>) : (<span className='todoItem__task'>{todoItem.todo}</span>)
          }
        </div>
        
        <div className="todoItem__cancel" onClick={() => handleCancel(todoItem.id)}> 
          <img src="/icon-cross.svg" alt="" />
        </div>
    </div>
  )
}

export default TodoItem
