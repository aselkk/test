import React from "react";
import { TextField } from "../text-field";
import style from "./style.module.scss";

export enum FIELD_TYPE {
  text = "inputText",
  email = "inputEmail",
  password = "inputPassword",
}

export type Field = {
  id: string;
  label: string;
  type: FIELD_TYPE;
  defaultValue?: string;
  required?: boolean;
};

export type FormFieldsRenderProps = {
  fields: Field[];
  onChange: (data: { id: string; value: string }) => void;
};

export const FormFieldsRender: React.FC<FormFieldsRenderProps> = (props) => {
  const { fields, onChange } = props;

  return (
    <div
      className={style.FormFieldsRender}
      onInput={(e) => {
        onChange({
          id: (e.target as HTMLInputElement).id,
          value: (e.target as HTMLInputElement).value,
        });
      }}
    >
      {fields.map(mapFormField)}
    </div>
  );
};

function mapFormField(field: Field) {
  switch (field.type) {
    case FIELD_TYPE.text:
      return (
        <TextField
          key={field.id}
          name={field.id}
          label={field.label}
          defaultValue={field.defaultValue}
          type="text"
          id={field.id}
          required={field.required}
        />
      );
    case FIELD_TYPE.email:
      return (
        <TextField
          key={field.id}
          name={field.id}
          label={field.label}
          defaultValue={field.defaultValue}
          type="email"
          id={field.id}
          required={field.required}
        />
      );
    case FIELD_TYPE.password:
      return (
        <TextField
          key={field.id}
          name={field.id}
          label={field.label}
          defaultValue={field.defaultValue}
          type="password"
          id={field.id}
          required={field.required}
        />
      );
    default:
      throw new Error("Unknown field type");
  }
}
