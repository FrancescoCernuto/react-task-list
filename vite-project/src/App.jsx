import { tasks } from "./data/tasksData";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const completedTasks = tasks.filter((task) => task.state === "completed");
  const inProgressTasks = tasks.filter((task) => task.state !== "completed");

  export default App
