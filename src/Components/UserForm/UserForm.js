import React, { useState } from "react";

import classes from "./UserForm.module.css";
import Button from "../UI/SubmitButton/Button";

function UserForm({ invalidInput, validInput }) {
  const [username, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (username.length === 0 || userAge.toString().length === 0) {
      // console.log("not correct username/userAge in UserForm.js");
      invalidInput((prevState) => {
        return { ...prevState, isShown: true, isFilled: false };
      });
      return;
    }

    if (+userAge <= 0) {
      // console.log("not correct userAge in UserForm.js");
      invalidInput((prevState) => {
        return { ...prevState, isShown: true, isAllowedNum: false };
      });
      return;
    }

    // console.log(username, userAge);
    validInput(username, userAge);
    setUserAge('');
    setUserName('')
  };

  const usernameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.userform}>
        <div className={classes["userform-username"]}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={usernameChangeHandler}
          ></input>
        </div>
        <div className={classes["userform-age"]}>
          <label htmlFor="age">Age(Years)</label>
          <input
            type="number"
            name="age"
            value={userAge}
            onChange={ageChangeHandler}
          ></input>
        </div>
      </div>
      <Button />
    </form>
  );
}

export default UserForm;
