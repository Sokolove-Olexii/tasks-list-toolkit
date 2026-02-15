import { useSelector, useDispatch } from "react-redux";
import { selectAllTasks } from "../../redux/selectors";
import { deleteTask, toggleTask } from "../../redux/actions";

const TaskList = () => {
  const tasks = useSelector(selectAllTasks);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Tasks:</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(toggleTask(task.id))}
            />

            <span>{task.text}</span>

            <button onClick={() => dispatch(deleteTask(task.id))}>
              Видалити
            </button>
          </li>
        ))}
      </ul>
      {tasks.length === 0 && <p>Список порожній.</p>}
    </div>
  );
};

export default TaskList;
