// import React from "react";
// import ReactDOM from "react-dom/client";
// import { makeAutoObservable } from "mobx";
// import { observer } from "mobx-react-lite";

// /* ----------------------- MobX Store (Global State) ----------------------- */
// class CounterStore {
//   count = 0;

//   constructor() {
//     makeAutoObservable(this);
//   }

//   increment() {
//     this.count++;
//   }

//   decrement() {
//     this.count--;
//   }

//   reset() {
//     this.count = 0;
//   }

//   get doubleCount() {
//     return this.count * 2;
//   }
// }

// const counterStore = new CounterStore();

// /* ----------------------- React Component ----------------------- */
// const Counter = observer(() => (
//   <div style={{ textAlign: "center", marginTop: 60 }}>
//     <h2>MobX Counter (Global State Example)</h2>
//     <h3>Count: {counterStore.count}</h3>
//     <h4>Double Count: {counterStore.doubleCount}</h4>

//     <div style={{ display: "inline-flex", gap: 8, marginTop: 10 }}>
//       <button onClick={() => counterStore.increment()}>+</button>
//       <button onClick={() => counterStore.decrement()}>−</button>
//       <button onClick={() => counterStore.reset()}>Reset</button>
//     </div>
//   </div>
// ));

// /* ----------------------- Render React App ----------------------- */
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Counter />);
