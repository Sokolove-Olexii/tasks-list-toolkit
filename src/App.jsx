import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import TaskFilter from "./components/TaskFilter/TaskFilter";
import TaskFilterButtons from "./components/TaskFilterButtons/TaskFilterButtons";

function App() {
  return (
    <div className="App">
      <TaskForm />
      <TaskFilter />
      <TaskFilterButtons />
      <TaskList />
    </div>
  );
}

export default App;
