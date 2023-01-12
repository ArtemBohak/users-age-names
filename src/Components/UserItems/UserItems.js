import React, { useState } from "react";

import classes from "./UserItems.module.css";
import UserItem from "./UserItem";

function UserItems({ data }) {
  const [userItemsList, setUserItemsList] = useState([]);
  
  setUserItemsList((prevState) => {
    return [...prevState, <UserItem username={data[0]} userAge={data[1]} />];
  });
  
  return { userItemsList };
}

export default UserItems;
