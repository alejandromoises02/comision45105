import React from "react";

const UserListView = ({ userList, handlerDelete }) => {

  return (
    <div>
      {userList.map((user, i) => {
        return (
          <div key={i}>
            <h2>{user}</h2>
            <button onClick={() => handlerDelete(user)}>eliminar</button>
          </div>
        );
      })}
    </div>
  );
};

export default UserListView;
