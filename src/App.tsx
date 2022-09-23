import React, {useState} from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import TodoList from './components/TodoList/TodoList';
import Title from './components/Title/Title';
import Footer from './components/Footer/Footer';
import { ToDo } from './model';

const App: React.FC<ToDo[]> = () => {

  const [ todo, setTodo ] = useState<string>("");
  const [ todoList, setTodoList ] = useState<ToDo[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if(todo){
      setTodoList([...todoList, {id: Date.now(), todo: todo, completed: false, active:true}])
    }
    setTodo("")
  }

  console.log(todoList)

  return (
    <div className='app'>
      <Header />
      <div className="app__todo">
        <Title />
        <Input todo={todo} setTodo={setTodo} handleSubmit={handleSubmit}/>
        <TodoList todoList={todoList} setTodoList={setTodoList} />
        <Footer todoList={todoList} setTodoList={setTodoList}/>
      </div>
    </div>
  )
}

export default App