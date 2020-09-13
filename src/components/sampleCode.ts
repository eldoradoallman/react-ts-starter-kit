import { useReducer } from "react";

export const initialState = {
  isLoading: false,
  isLoggedIn: false,
  user: null,
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };
    case "SET_AUTHORIZED":
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        currentUser: action.payload,
      };
    case "SET_UNAUTHORIZED":
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        currentUser: null,
      };
    default:
      return state;
  }
};

export const ReducerHooks = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  dispatch({
    type: "SET_AUTHORIZED",
    payload: { id: "123", email: "test@test.com", username: "johndoe" },
  });
};
