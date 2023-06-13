import React from "react";
import style from "./style.module.scss";

export type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: "submit" | "button";
  disabled?: boolean; 

};

export const Button: React.FC<ButtonProps> = (props) => {
  const { label, onClick, type, disabled } = props;

  return (
    <button onClick={onClick} type={type} className={disabled ? style.buttonDis : style.button  } disabled={disabled}>
      {label}
    </button>
  );
};
