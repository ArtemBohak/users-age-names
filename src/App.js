import React, { useState } from "react";

import Card from "./Components/CardStyle/Card";
import UserForm from "./Components/UserForm/UserForm";
import UserItems from "./Components/UserItems/UserItems";

function App() {
  const [isValid, setIsValid] = useState({ isEmpty: true, isAllowedNum: true });
  const [correctData, setCorrectData] = useState({});

  const invalidInput = (valid) => {
    console.log("invalidInput");
    setIsValid(valid);
  };

  const validInput = (correctUsername, correctAge) => {
    console.log("validInput");
    setCorrectData({ correctUsername, correctAge });
  };

  return (
    <div>
      <Card>
        <UserForm invalidInput={invalidInput} validInput={validInput} />
      </Card>
      <Card>
        <UserItems data={correctData} />
      </Card>
    </div>
  );
}

export default App;
