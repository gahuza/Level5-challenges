// first we install @reduxjs/toolkit react-redux

//index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";

/* ------------------- Redux setup (kept inline for simplicity) ------------------- */
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    reset: (state) => { state.value = 0; },
  },
});

const { increment, decrement, reset } = counterSlice.actions;

const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});

// const counterSlices = createSlices({
//   name:"counter",
//   initialState: {value:0},
//   reducers:{
//     increment: (state)=> {state.value +=1},
//     decrement: (state)=> {state.value -=1},
//     restet: (state)=> {state.value =0;},
//   }
// })

/* ------------------- React components ------------------- */
function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  // function counter(){
  //   const count = useselector((state)=> state.count.value);
  //   const dispatch =useDispatch();
  // }

  return (
    <div style={{ textAlign: "center", marginTop: 60 }}>
      <h2>Redux Counter (Teacher App)</h2>
      <h3>Count: {count}</h3>

      <div style={{ display: "inline-flex", gap: 8 }}>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>−</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}
return(
  <div>
    <h2>Redux Counter: Teacher App</h2>
  <h3>Count :{count}</h3>
  <button onClick={()=>dispatch(increment())}>+</button>
   <button onClick={()=>dispatch(decrement())}>-</button>
    <button onClick={()=>dispatch(reset())}>Reset</button>
  </div>
)

/* ------------------- Render ------------------- */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Counter />
  </Provider>
);
