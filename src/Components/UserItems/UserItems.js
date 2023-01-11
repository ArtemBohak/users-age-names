import React, { useState } from "react";

import classes from "./UserItems.module.css";
import UserItem from "./UserItem";

function UserItems({ data }) {
  const [userItemsList, setUserItemsList] = useState([]);
  
  
  return { userItemsList };
}

export default UserItems;
