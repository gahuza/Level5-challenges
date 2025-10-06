import React, { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]); // state to store data
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    // fetch data when component mounts
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []); // empty dependency array → runs once after initial render

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
