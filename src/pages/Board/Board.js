          import { useEffect, useState } from "react";
import Lane from "../../components/Lane/Lane";
import "./Board.css";

const lanes = [
  { id: 1, title: "To Do" },
  { id: 2, title: "In Progress" },
  { id: 3, title: "Review" },
  { id: 4, title: "Done" },
];

function Board() {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  // get data from api
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(
          "https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks"
        );
        const response = await data.json();
        if (response) {
          setTasks(response);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="Board-wrapper">
      {lanes.map((lane) => (
        <Lane
          key={lane.id}
          title={lane.title}
          loading={loading}
          tasks={tasks.filter((task) => task.lane == lane.id)}
          error={error}
        />
      ))}
    </div>
  );
}

export default Board;
