import React, { useState } from "react";

import Card from "./Components/CardStyle/Card";
import UserForm from "./Components/UserForm/UserForm";
import UserItems from "./Components/UserItems/UserItems";
import ModalWindow from "./Components/UI/ModalWindow/ModalWindow"

function App() {
  const [isValid, setIsValid] = useState({ isEmpty: true, isAllowedNum: true });
  const [correctData, setCorrectData] = useState([]);

  const invalidInput = (valid) => {
    // console.log("invalidInput");
    setIsValid(valid);
  };

  const validInput = (correctUsername, correctAge) => {
    console.log("validInput");
    setCorrectData((prevState) => {
      return [...prevState, [correctUsername, correctAge]];
    });
  };

  return (
    <div>
      <Card>
        <UserForm invalidInput={invalidInput} validInput={validInput} />
      </Card>
      <Card>
        <UserItems data={[["John", 31], ...correctData]} />
      </Card>
      <ModalWindow isValid={isValid}/>
    </div>
  );
}

export default App;
