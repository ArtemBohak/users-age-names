import React from "react";

function UserItem({username, userAge}) {

  return (
    <li>
      <span>{username}</span>
      <span>{` (${userAge} years old)`}</span>
    </li>
  )
}

export default UserItem;
