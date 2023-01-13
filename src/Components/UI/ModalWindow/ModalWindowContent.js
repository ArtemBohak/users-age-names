import React from "react";
import Card from "../../CardStyle/Card";

function ModalWindowContent({ validParams, className, ...props }) {
  let content = !validParams.isFilled ? (
    <p>The fields are not filled</p>
  ) : (
    <p>The age should not be below 0</p>
  );

  return <Card className={className}>{content}</Card>;
}

export default ModalWindowContent;
