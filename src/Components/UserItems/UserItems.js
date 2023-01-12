import React from "react";

import classes from "./UserItems.module.css";
import UserItem from "./UserItem";

function UserItems({ data }) {
  
  let userItemsList = data.map((dataItem) => {
    return (
      <UserItem
        key={new Date().getTime() + Math.random()}
        username={dataItem[0]}
        userAge={dataItem[1]}
      />
    );
  });

  if (data.length !== 0) {
    return <ul className={classes["user-items-list"]}>{userItemsList}</ul>
  } else {
    return <p>No users found</p>
  };
}

export default UserItems;
