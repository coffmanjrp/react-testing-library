import { useState } from 'react';
import { v4 } from 'uuid';
import './AddInput.css';
import TodoList from '../TodoList/TodoList';

const AddInput = ({ setTodos, todos }) => {
  const [todo, setTodo] = useState('');

  const addTodo = () => {
    const updatedTodos = [...todos, { id: v4(), task: todo, completed: false }];
    setTodos(updatedTodos);
    setTodo('');
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task here..."
      />
      <button className="add-btn" onClick={addTodo}>
        Add
      </button>
    </div>
  );
};

export default AddInput;
