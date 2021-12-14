import React from "react";
import { UnorderedList, ListItems } from "./usersList.style";

const UsersList = (props) => {
  return (
    <UnorderedList>
      {props.users.map((user) => (
        <ListItems key={user.id}>
          {user.name} is {user.age} years old
        </ListItems>
      ))}
    </UnorderedList>
  );
};

export default UsersList;
