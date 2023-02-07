import React, { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([
    { name: "Rami" },
    { name: "Maxi" },
    { name: "Martin" },
  ]);

  const [name, setName] = useState("");

  const handlerAddUser = () => {
    setUsers([...users, { name }]);
  };

  const handlerChange = (e) => {
    setName(e.target.value);
  };

  const handlerReset = () => {
    setUsers([])
  }

  return (
    <>
      <h1>Lista de usuarios</h1>
      <ul>
        {users.map((user, i) => (
          <li key={i}>{user.name}</li>
        ))}
      </ul>

      <input type="text" value={name} onChange={handlerChange} />
      <button onClick={handlerAddUser}>Agregar usuario</button>
      <button onClick={handlerReset}>Reset</button>
    </>
  );
};

export default Users;
