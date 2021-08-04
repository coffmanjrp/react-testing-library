import { Link } from 'react-router-dom';
import './TodoFooter.css';

const TodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <div className="todo-footer">
      <p data-testid="paragraph">
        {numberOfIncompleteTasks}{' '}
        {numberOfIncompleteTasks === 1 ? 'task' : 'tasks'} left
      </p>
      <Link to="/Followers">Followers</Link>
    </div>
  );
};

export default TodoFooter;
