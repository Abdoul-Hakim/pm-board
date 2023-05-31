import Task from "../../components/Task/Task";
import useDataFetching from "../../hooks/useDatafetching";

function Backlog() {
  const [loading, error, tasks] = useDataFetching(
    "https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks"
  );
  return (
    <div className="Backlog-wrapper">
      <h2>Backlog</h2>
      <div className="Task-Wwrapper">
        {loading || error ? (
          <span>{error || "Loading..."}</span>
        ) : (
          tasks.map((task) => <Task title={task.title} body={task.body}></Task>)
        )}
      </div>
    </div>
  );
}

export default Backlog;
