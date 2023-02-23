import React, { useState } from "react";
import UserListView from "./UserListView";

const UsersList = () => {
  const [name, setName] = useState("");
  const [userList, setUserList] = useState([]);

  const handlerChange = (e) => {
    setName(e.target.value);
  };

  const handlerClick = () => {
    setUserList([...userList, name]);
  };

  const handlerDelete = (userD) => {
    setUserList(userList.filter((user) => user !== userD));
  };

  return (
    <div>
      <input type="text" value={name} onChange={handlerChange} />
      <button onClick={handlerClick}>agregar</button>

      <UserListView userList={userList} handlerDelete={handlerDelete} />
    </div>
  );
};

export default UsersList;
