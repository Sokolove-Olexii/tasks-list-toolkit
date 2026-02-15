import { useDispatch, useSelector } from "react-redux";
import { setSearchFilter } from "../../redux/actions";
import { selectFilters } from "../../redux/selectors";

const TaskFilter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleChange = (e) => {
    dispatch(setSearchFilter(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filtration..."
        value={filters.search}
        onChange={handleChange}
      />
    </div>
  );
};

export default TaskFilter;
