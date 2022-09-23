import React from 'react';
import './TodoList.scss';
import TodoItem from '../TodoItem/TodoItem';
import { ToDo } from '../../model';

interface Props {
  todoList: ToDo[],
  setTodoList: React.Dispatch<React.SetStateAction<ToDo[]>>,
}

const TodoList: React.FC<Props> = ({todoList, setTodoList}) => {
  return (
    <div className="todoList">
      {
        todoList.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        ) )
      }
    </div>
  )
}

export default TodoList