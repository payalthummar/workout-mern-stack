import { createContext, useReducer } from "react";

// create context
export const WorkoutContext = createContext();

// reducer function
export const workoutReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };

    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      };
    default:
      return state;
  }
};

// context provider
// wraps children property.
// inside index.js wraps to App component to WorkoutContextProvider
//  all components will have access WorkoutContext

export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutReducer, {
    workouts: null,
  });

  return (
    <WorkoutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};
