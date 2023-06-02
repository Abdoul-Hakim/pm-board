import Lane from "../../components/Lane/Lane";
import "./Board.css";
import useDataFetching from "../../hooks/useDatafetching";

const lanes = [
  { id: 1, title: "To Do" },
  { id: 2, title: "In Progress" },
  { id: 3, title: "Review" },
  { id: 4, title: "Done" },
];
function onDragOver(e) {
  e.preventDefault()
}
function Board() {
  const [loading, error, tasks] = useDataFetching(
    "https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks"
  );
  return (
    <div className="Board-wrapper">
      {lanes.map((lane) => (
        <Lane
          key={lane.id}
          title={lane.title}
          loading={loading}
          tasks={tasks.filter((task) => task.lane == lane.id)}
          error={error}
          onDragOver={(e) => onDragOver(e)}
        />
      ))}
    </div>
  );
}

export default Board;
