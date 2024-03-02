interface Todo {
    id: string;
    title: string;
    completed: boolean;
  }

  interface TodoListProps {
    todos: Todo[];
    toggleTodo: (id: string, completed: boolean) => void;
    deleteTodo: (id: string) => void;
  }
  
  export default function TodoList({ todos, toggleTodo, deleteTodo }: TodoListProps) {
  


    return (
        <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => (
          <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} onChange={(e) => toggleTodo(todo.id, e.target.checked)}/> {todo.title}
            </label>
            <button className="btn btn-danger" onClick={(e) => deleteTodo(todo.id)}>Delete</button>
            {/* dont call onClick={deleteTodo(todo.id)} because it rightaway calls the function delete and the todo will be deleted immediately */}
          </li>
        ))}
      </ul>
    )
}