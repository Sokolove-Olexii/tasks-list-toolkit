import { useDispatch } from "react-redux";
import { setStatusFilter } from "../../redux/actions";

const TaskFilterButtons = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (filterValue) => {
    dispatch(setStatusFilter(filterValue));
  };

  return (
    <div>
      <button onClick={() => handleFilterChange("all")}>View all</button>
      <button onClick={() => handleFilterChange("completed")}>
        View checked
      </button>
      <button onClick={() => handleFilterChange("active")}>
        View unChecked
      </button>
    </div>
  );
};

export default TaskFilterButtons;
