import React from "react";
import classes from "./Card.module.css";

function Card({children, className, ...props}) {
  return <div className={`${classes['card']} ${className}`}>
    {children}
  </div>;
}

export default Card;
