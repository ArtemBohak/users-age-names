import React from "react";
import Card from "../../CardStyle/Card";

function ModalWindowContent({ children, isValid, ...props }) {

  if (!isValid.isEmpty) {
    return (
      <Card className={props.className}>
        <p>You have to fill all the fields.</p>
      </Card>
    );
  }

  if (!isValid.isAllowedNum) {
    console.log('Not allowed num')
    return (
      <Card className={props.className}>
        <p>The number should not be bellow zero.</p>
      </Card>
    );
  }
}

export default ModalWindowContent;
