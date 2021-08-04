import { v4 } from 'uuid';
import TodoFooter from '../TodoFooter/TodoFooter';
import './TodoList.css';

const TodoList = ({ todos, setTodos }) => {
  const updateTask = (id) => {
    const updatedTask = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    setTodos(updatedTask);
  };

  const calcNumberOfIncompleteTasks = () => {
    let count = 0;
    todos.forEach((todo) => {
      if (!todo.completed) count++;
    });
    return count;
  };

  return (
    <div className="todolist-container">
      <div className="todos-container">
        <div>
          {todos.map((todo, index) => (
            <div
              key={index}
              className={`todo-item ${todo.completed && 'todo-item-active'}`}
              onClick={() => updateTask(todo.id)}
              data-testid={'task-container'}
            >
              {todo.task}
            </div>
          ))}
        </div>
      </div>
      <div>
        <TodoFooter numberOfIncompleteTasks={calcNumberOfIncompleteTasks()} />
      </div>
    </div>
  );
};

export default TodoList;
