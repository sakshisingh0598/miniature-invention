import React, { useState } from "react";
import "./styles.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export default function App() {
  const [newTodos, setNewTodos] = useState<Todo[]>([]);

  function addTodo(title: string) {
    setNewTodos((currentTodos: Todo[]) => [
      ...currentTodos,
      {
        id: crypto.randomUUID(),
        title,
        completed: false
      }
    ]);
  }

  function toggleCheck(id: string, checked: boolean){
    setNewTodos((currentTodos) => {
      return currentTodos.map(todo => 
              todo.id === id ? { ...todo, completed: checked } : todo)
              
      })
  }

  function deleteTodo(id: string){
    setNewTodos((currentTodos) => {
      return currentTodos.filter(todo => todo.id!==id);
    })
  }


  return (
    <>
     <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo List</h1>
      <TodoList todos={newTodos} toggleTodo={toggleCheck} deleteTodo={deleteTodo}/>
    </>
  );
}
