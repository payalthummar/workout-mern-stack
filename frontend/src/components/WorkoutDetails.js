import React from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

// date fns

import formatDistanceToNow from "date-fns/formatDistanceToNow";

export default function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutsContext();
  const handleClick = async () => {
    const response = await fetch(`/api/workouts/${workout._id}`, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  const editHandleClick = async () => {
    // const response = await fetch(`/api/workouts/${workout._id}`, {
    //   method: "PUT",
    //   body: JSON.stringify(workout),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const json = await response.json();
    // if (response.ok) {
    //   dispatch({ type: "UPDATE_WORKOUT", payload: json });
    // }
  };
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg):</strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <div className="button-icons">
        <AiOutlineDelete onClick={handleClick} className="delete-icon" />
        <AiOutlineEdit onClick={editHandleClick} className="edit-icon" />
      </div>

      {/* <span className="material-symbols-outlined" onClick={handleClick}>
        Delete
      </span> */}
    </div>
  );
}
