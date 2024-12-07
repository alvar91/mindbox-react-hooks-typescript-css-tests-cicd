import React, { useState, FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FormProps } from "../../models/interfaces";
import "./Form.css";

export const Form: FC<FormProps> = ({ addTask }) => {
  const [value, setValue] = useState<string>("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(value);
    setValue("");
  };

  return (
    <form action="#" className="form" onSubmit={submitHandler}>
      <FontAwesomeIcon icon={faChevronDown} className="form__icon" />
      <input
        type="text"
        placeholder="What needs to be done?"
        className="form__input"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </form>
  );
};
