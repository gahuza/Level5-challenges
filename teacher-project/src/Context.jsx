


import React, { createContext, useContext } from "react";

const UserContext = createContext();

function Context() {
  return (
    <UserContext.Provider value=" To Jean de Dieu Counting Application">
      <Profile />
    </UserContext.Provider>
  );
}

function Profile() {
  const user = useContext(UserContext); // Access shared value
  return <h3>Welcome, {user}!</h3>;
}

export default Context;




