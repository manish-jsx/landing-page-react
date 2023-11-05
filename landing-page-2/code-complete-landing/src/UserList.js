import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Make a GET request to your Node.js server
    axios.get('http://localhost:3001/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>List of Registered Users</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            <strong>Name:</strong> {user.name}<br />
            <strong>Email:</strong> {user.email}<br />
            <strong>Occupation:</strong> {user.occupation}<br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
