import React from "react";

import classes from "./UserForm.module.css";
import Button from "../UI/Button";

function UserForm(props) {
  return (
    <div className={classes.userform}>
      <div className={classes['userform-username']}>
        <label htmlFor="usernameInput">Username</label>
        <input name="usernameInput"></input>
      </div>
      <div className={classes['userform-age']}>
        <label htmlFor="ageInput">Age(Years)</label>
        <input name="ageInput"></input>
      </div>
      <Button />
    </div>
  );
}

export default UserForm;
