import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../../redux/actions";

const TaskForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;

    dispatch(addTask(text));
    setText("");
  };
  return (
    <form action="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;
