import axios from "axios";
import React, { useReducer, useEffect } from "react";

//Initialization of the state
const initialState = {
  loading: true,
  post: {},
  error: "",
};

//Reducer function to create a decision on cases
const reducer = (state, action) => {
  switch (action.type) {
    case "success":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "error":
      return {
        loading: false,
        post: {},
        error: "Error Error",
      };
  }
};

function Fetcher() {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Useeffect is used for request for data
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typifcode.com/posts/1")
      .then((response) => {
        dispatch({
          //dispatch triggeres and later reducer is triggered and give the response accordingly
          type: "success",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({ type: "error" });
      });
  }, []);
  return (
    <div>
      {/* true then post title otherwise load */}
      {state.loading ? "loading" : state.post.title}
      {/* error then show error from reducer otherwise null */}
      {state.error ? state.error : null}
    </div>
  );
}

export default Fetcher;
