import React, { useEffect, useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineClose } from "react-icons/ai";

// date fns

import formatDistanceToNow from "date-fns/formatDistanceToNow";
import WorkoutEdit from "./WorkoutEdit";

export default function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutsContext();

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, [workout]);

  const handleClick = async () => {
    const response = await fetch(`/api/workouts/${workout._id}`, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <>
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
          {formatDistanceToNow(new Date(workout.createdAt), {
            addSuffix: true,
          })}
        </p>
        <div className="button-icons">
          <AiOutlineDelete onClick={handleClick} className="delete-icon" />
          <AiOutlineEdit onClick={handleShow} className="edit-icon" />
        </div>
      </div>

      <div
        className="workout-details"
        show={show}
        style={{ display: show ? "block" : "none" }}
      >
        <h1>Edit Workout</h1>
        <div className="button-icons">
          <AiOutlineClose onClick={handleClose} />
        </div>

        <WorkoutEdit workout={workout} />
      </div>
    </>
  );
}
