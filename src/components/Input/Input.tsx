import React from 'react';
import './Input.scss';
import checkIcon from '/icon-check.svg';
import cancelIcon from '/icon-cross.svg';
import { BsCircle } from 'react-icons/bs';

interface Props {
  todo: string,
  setTodo:  React.Dispatch<React.SetStateAction<string>>
  handleSubmit: (e: React.FormEvent) => void
}

const Input: React.FC<Props> = ({todo, setTodo, handleSubmit}) => {

  return (
    <div className='input'>
      <form onSubmit={handleSubmit} className="input__form">
        <BsCircle className='input__icon'/>
        <input type="text" placeholder='Create a new todo...' value={todo} onChange={(e) => setTodo(e.target.value)} className="input__form-input" />
      </form>
    </div>
  )
}

export default Input