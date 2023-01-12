import React from "react";

import classes from "./Button.module.css";

function Button() {

  return (
    <button type='submit' className={classes['submit-button']}>Add User</button>
  )
}

export default Button