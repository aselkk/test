import {
  FIELD_TYPE,
  Field,
  FormFieldsRender,
} from "../../lib/ui/form-fields-render";
import { Button } from "../../lib/ui/button";
import { useState, useEffect } from "react";
import style from "./style.module.scss";
import woman from '../../assets/img/💁🏻_♀️.svg'

const fieldConfig: Field[] = [
  {
    id: "first_name",
    type: FIELD_TYPE.text,
    label: "First Name",
    defaultValue: "Some first name",
  },
  {
    id: "last_name",
    type: FIELD_TYPE.text,
    label: "Last Name",
  },
  {
    id: "email",
    type: FIELD_TYPE.email,
    label: "Email",
    required: true,
  },
  {
    id: "password",
    type: FIELD_TYPE.password,
    label: "Password",
    required: true,
  },
];

const FormPage = () => {
  const defaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  const [result, setResult] = useState<{ [key: string]: string }>(defaultValues);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isRequiredFieldsFilled = fieldConfig.every((field) =>
      field.required ? result[field.id] : true
    );
    setIsFormValid(isRequiredFieldsFilled);
  }, [result]);

  const handleFieldChange = ({ id, value } : {id: string, value: string }) => {
    setResult((prevResult) => ({ ...prevResult, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('success')
  };

  return (
    <div className={style.formWrapper}>
      <form className={style.form} onSubmit={handleSubmit}>
        <img src={woman} alt="img" className={style.img}/>

        <FormFieldsRender fields={fieldConfig} onChange={handleFieldChange} />

        <Button
          label="Submit"
          type="submit"
          disabled={!isFormValid}
        />
      </form>
    </div>
  );
};

export default FormPage;
