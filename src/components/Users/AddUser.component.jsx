import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal.component";
import {
  Form,
  FormLabel,
  Input,
  ButtonPrimary,
  SmallMessge,
} from "./AddUser.styles";

//component

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({ msg: "invalid name or age!" });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        msg: "invalid age!",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModal errorHandler={errorHandler} msg={error.msg} />}
      <Form autoComplete="off" onSubmit={addUserHandler}>
        <FormLabel>Username</FormLabel>
        <Input
          value={enteredUsername}
          type="text"
          id="username"
          onChange={usernameChangeHandler}
        />
        <SmallMessge>Name must be valid no empty values</SmallMessge>
        <FormLabel>Age(Years)</FormLabel>
        <Input
          value={enteredAge}
          type="number"
          id="age"
          onChange={ageChangeHandler}
        />
        <SmallMessge>Age must be grater than 1</SmallMessge>
        <ButtonPrimary type="submit">submit</ButtonPrimary>
      </Form>
    </div>
  );
};

export default AddUser;
