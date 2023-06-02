import Lane from "../../components/Lane/Lane";
import "./Board.css";
import useDataFetching from "../../hooks/useDatafetching";
import { useEffect, useState } from "react";

const lanes = [
  { id: 1, title: "To Do" },
  { id: 2, title: "In Progress" },
  { id: 3, title: "Review" },
  { id: 4, title: "Done" },
];

function onDragOver(e) {
  e.preventDefault();
}
function onDragStart(e, id) {
  e.dataTransfer.setData('id', id);
}


function Board() {
  // call custom hook
  const [loading, error, data] = useDataFetching(
    "https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks"
  );
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, [data]);

  // onDrop event handler
  function onDrop(e, laneId) {
    const id = e.dataTransfer.getData('id');
    const updateTasks = tasks.filter((task) => {
      console.log(task.lane, laneId)
      if (task.id.toString() === id) {
        task.lane = laneId;
      }
      return task;
    })
    setTasks(updateTasks)
  }
  return (
    <div className="Board-wrapper">
      {lanes.map((lane) => (
        <Lane
          key={lane.id}
          laneId={lane.id}
          title={lane.title}
          loading={loading}
          tasks={tasks.filter((task) => task.lane == lane.id)}
          error={error}
          onDragOver={onDragOver}
          onDrop={onDrop}
          onDragStart={onDragStart}
        />
      ))}
    </div>
  );
}

export default Board;
