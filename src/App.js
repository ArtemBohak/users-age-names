import React from "react";
import Card from "./Components/CardStyle/Card";
import UserForm from "./Components/UserForm/UserForm";

function App() {
  return (
    <div>
      <Card>
        <UserForm />
      </Card>
      <Card></Card>
    </div>
  );
}

export default App;
