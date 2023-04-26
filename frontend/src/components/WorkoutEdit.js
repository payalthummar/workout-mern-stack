import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

export default function WorkoutEdit({ workout }) {
  const { dispatch } = useWorkoutsContext();

  //   const id = workout._id;

  const [title, setTitle] = useState(workout.title);
  const [load, setLoad] = useState(workout.load);
  const [reps, setReps] = useState(workout.reps);
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // object
    const workoutData = { _id: workout._id, title, load, reps };

    const response = await fetch(`/api/workouts/${workout._id}`, {
      method: "PATCH",
      body: JSON.stringify(workoutData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log("data", json);
    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      console.log("workout updated", json);
      dispatch({ type: "UPDATE_WORKOUT", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <label> Exercise Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields?.includes("title") ? "error" : ""}
      />
      <label> Load (in kg):</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        className={emptyFields?.includes("load") ? "error" : ""}
      />
      <label> Reps:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className={emptyFields?.includes("reps") ? "error" : ""}
      />
      <button type="submit">Update Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}
