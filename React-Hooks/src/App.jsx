import React, { useReducer, useContext } from "react";
import CounterOne from "./components/CustomHooks/CounterOne";
import CounterTwo from "./components/CustomHooks/CounterTwo";
import TitleOne from "./components/CustomHooks/TitleOne";
import TitleTwo from "./components/CustomHooks/TitleTwo";
import User from "./components/CustomHooks/User";
import CleanupEffect from "./components/UseEffect/CleanupEffect";
import CleanupToggler from "./components/UseEffect/CleanupToggler";
import DataFetch from "./components/UseEffect/DataFetch";
import UseEffectRender from "./components/UseEffect/UseEffectRender";
import Fetcher from "./components/UseReducer/DataFetch/Fetcher";
import EnhhancedReducer from "./components/UseReducer/EnhhancedReducer";
import LevelOne from "./components/UseReducer/ReducerNuserContext/LevelOne";
import UseReducer from "./components/UseReducer/UseReducer";
import UseRef from "./components/UseRef/UseRef";
import UseState from "./components/UseState/UseState";
import WithArray from "./components/UseState/WithArray";
import WithObject from "./components/UseState/WithObject";

//Context is created to wrap the whole div tag or the top level 
// export const CountContext = React.createContext();

// Initialization of the state and action to be executed
// const initialState = 0
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;

//     case "decrement":
//       return state - 1;

//     case "reset":
//       return initialState;

//     default:
//       return state;
//   }
// };

function App() {
//   const [count, dispatch] = useReducer(reducer, initialState);

  return (
    // {/* <UseState /> */}
    // {/* <WithObject /> */}

    // {/* <WithArray /> */}
    // {/* <UseEffectRender /> */}
    // {/* <CleanupEffect /> */}
    // {/* <CleanupToggler /> */}
    // {/* <DataFetch /> */}
    // {/* <UseReducer /> */}

    // {/* <EnhhancedReducer /> */}

    // Context is wrapped and value is provided with custom attributes to be passed down 
    // <CountContext.Provider value={{ countValue: count, dispatchValue: dispatch }}>
    //   <div>
    //   <h1>firstcount - {count}</h1>
    //     <LevelOne />
    //   </div>
    // </CountContext.Provider>

    <div>
       {/* <Fetcher /> */}
         {/* <UseRef /> */}
         {/* <TitleOne />
         <TitleTwo /> */}

         {/* <CounterOne />
         <CounterTwo /> */}
         <User />
    </div>
  );
}
export default App;
