import React, { useState } from "react";
import AddUser from "./components/Users/AddUser.component";
import UsersList from "./components/Users/UsersList.component";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const onAddUserHandler = (userName, userAge) => {
    setUsersList((prevState) => {
      return [
        ...prevState,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;
