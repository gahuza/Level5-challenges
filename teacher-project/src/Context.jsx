// // import React, { createContext, useContext } from "react";

// // // 1️⃣ Create Context
// // const ThemeContext = createContext("dark");

// // function Context() {
// //   return (
// //     // 2️⃣ Provide Context value
// //     <ThemeContext.Provider value="light">
// //       {/* <Toolbar /> */}
// //        <ThemedButton />
// //     </ThemeContext.Provider>
// //   );
// // }

// // // function Toolbar() {
// // //   return (
// // //     <div>
// // //       <ThemedButton />
// // //     </div>
// // //   );
// // // }

// // function ThemedButton() {
// //   // 3️⃣ Use Context value
// //   const theme = useContext(ThemeContext);
// //   return <button>The current theme is {theme}</button>;
// // }

// // export default Context;





// import React, {createContext, useContext} from "react";

// const ThemeContext = createContext("dark");

// function Context(){
//     return(
//         <ThemeContext.Provider value="light">
//            <Consume/>
//         </ThemeContext.Provider>

        
//     )
// }

// function Consume(){
   
   
//           const Themee = useContext(ThemeContext);
//         return <button> The Current theme is {Themee}</button>
// }

// export default Context;





import React, { createContext, useContext } from "react";

const UserContext = createContext();

function Context() {
  return (
    <UserContext.Provider value="Jean de Dieu">
      <Profile />
    </UserContext.Provider>
  );
}

function Profile() {
  const user = useContext(UserContext); // Access shared value
  return <h3>Welcome, {user}!</h3>;
}

export default Context;





// import React, { createContext, useContext, useState } from "react";

// const ThemeContext = createContext();

// function Context() {
//   const [theme, setTheme] = useState("light");

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       <Toolbar />
//     </ThemeContext.Provider>
//   );
// }

// function Toolbar() {
//   return <ThemedButton />;
// }

// function ThemedButton() {
//   const { theme, setTheme } = useContext(ThemeContext);

//   return (
//     <div>
//       <button
//         onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//         style={{
//           backgroundColor: theme === "light" ? "#fff" : "#333",
//           color: theme === "light" ? "#000" : "#fff",
//           padding: "10px",
//         }}
//       >
//         Current Theme: {theme}
//       </button>
//     </div>
//   );
// }

// export default Context;
