import { Labelled } from "../labelled/Labelled";
import React from "react";
import style from "./style.module.scss";

export type TextFieldProps = { label: string } & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const TextField: React.FC<TextFieldProps> = (props) => {
  const { label, className = "", ...rest } = props;

  return (
    <Labelled id={rest.id} label={label}>
      <input placeholder="Enter value" {...rest} className={`${style.textField} ${className}`} />
    </Labelled>
  );
};
