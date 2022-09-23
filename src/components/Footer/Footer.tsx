import React, { useState } from 'react';
import './Footer.scss';
import { ToDo } from '../../model';

interface Props {
  todoList: ToDo[],
  setTodoList: React.Dispatch<React.SetStateAction<ToDo[]>>
}

const Footer: React.FC<Props> = ({todoList, setTodoList}) => {

  // Declare the states for the completed and active items
  const [completed, setCompleted] = useState<ToDo[]>(todoList)
  const [active, setActive] = useState<ToDo[]>(todoList)

  // Select all the tasks
  const selectAll = () => {
    setTodoList(todoList)
  }

  const selectActive = () => {
    setTodoList(todoList.filter(todo => todo.active == true))
  }

  // completed should filter out only the completed tasks
  const selectCompleted = () => {
    setTodoList(todoList.filter(todo => todo.completed == true))
  }

  // Should clear all the completed tasks
  const clearCompleted = () => {
    setTodoList(todoList.filter(todo => todo.completed == false))
  }

  return (
    <div className='footer'>
      <div className="footer__desktop--view">
          <div className='footer__items--left'>
            <small>{todoList.length} items left</small>
          </div>
          <div className="footer__item--links">
            <small onClick={selectAll}>All</small>
            <small onClick={selectActive}>Active</small>
            <small onClick={selectCompleted}>Completed</small>
          </div>
          <div className="footer__clear--completed">
            <small onClick={clearCompleted}>Clear completed</small>
          </div>
      </div>

      <div className="footer__mobile--view">
        <div className="top">
          <div className='footer__items--left'>
            <small>{todoList.length} items left</small>
          </div>
          <div className="footer__clear--completed">
            <small onClick={clearCompleted}>Clear completed</small>
          </div>
        </div>
         <div className="bottom">
            <small onClick={selectAll}>All</small>
            <small onClick={selectActive}>Active</small>
            <small onClick={selectCompleted}>Completed</small>
         </div>
      </div>
      
    </div>
  )
}

export default Footer