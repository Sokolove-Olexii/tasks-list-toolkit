import { useSelector, useDispatch } from "react-redux";
import { selectVisibleTasks } from "../../redux/selectors";
import { deleteTask, toggleTask } from "../../redux/actions";

const TaskList = () => {
  const visibleTasks = useSelector(selectVisibleTasks);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Tasks:</h3>
      <ul>
        {visibleTasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(toggleTask(task.id))}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => dispatch(deleteTask(task.id))}>
              Видалити
            </button>
          </li>
        ))}
      </ul>
      {visibleTasks.length === 0 && <p>Задач не найдено.</p>}
    </div>
  );
};

export default TaskList;
