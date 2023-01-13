import React, { useState } from "react";

import ModalWindowContent from "./ModalWindowContent";
import "./ModalWindow.css";

function ModalWindow({ setIsValid, validParams }) {
  const modalWindowHandler = (event) => {
    if (event.target === event.currentTarget) {
      setIsValid((prevState) => {
        return { ...prevState, isShown: false };
      });
    }
  };

  if (validParams.isShown) {
    return (
      <div onClick={modalWindowHandler} className="modal-window active">
        <ModalWindowContent
          validParams={validParams}
          className="modal-window__content active"
        />
      </div>
    );
  } else {
    return (
      <div
        onClick={(event) => {
          event.stopPropagation();
        }}
        className="modal-window"
      >
        <ModalWindowContent
          validParams={validParams}
          className="modal-window__content"
        />
      </div>
    );
  }
}

export default ModalWindow;
