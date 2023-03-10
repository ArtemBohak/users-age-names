import React, { useState } from "react";

import Card from "./Components/CardStyle/Card";
import UserForm from "./Components/UserForm/UserForm";
import UserItems from "./Components/UserItems/UserItems";
import ModalWindow from "./Components/UI/ModalWindow/ModalWindow";

function App() {
  const [isValid, setIsValid] = useState({
    isFilled: true,
    isAllowedNum: true,
    isShown: false,
  });
  const [correctData, setCorrectData] = useState([]);

  const invalidInput = (valid) => {
    // console.log("invalidInput");
    setIsValid(valid);
  };

  const validInput = (correctUsername, correctAge) => {
    // console.log("validInput");
    setCorrectData((prevState) => {
      return [...prevState, [correctUsername, correctAge]];
    });
  };

  return (
    <div style={{ overflow: isValid.isShown ? "hidden" : "auto" }}>
      <Card>
        <UserForm invalidInput={invalidInput} validInput={validInput} />
      </Card>
      <Card>
        <UserItems
          data={[
            ["John", 31],
            ["John", 31],
            ["John", 31],
            ["John", 31],
            ["John", 31],
            ["John", 31],
            ["John", 31],
            ["John", 31],
            ["John", 31],
            ["John", 31],
            ["John", 31],
            ["John", 31],
            ...correctData,
          ]}
        />
      </Card>
      <ModalWindow
        // isShown={isShown}
        // setIsShown={setIsShown}
        validParams={isValid}
        setIsValid={setIsValid}
      />
    </div>
  );
}

export default App;
