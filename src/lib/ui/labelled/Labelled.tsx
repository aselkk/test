import React from "react";
import style from "./style.module.scss";

export type LabelledProps = {
  id?: string;
  label: string;
};

export const Labelled: React.FC<React.PropsWithChildren<LabelledProps>> = (
  props
) => {
  const { id, label, children } = props;

  return (
    <div className={style.labelled}>
      <label className={style.labelled__label} htmlFor={id}>
        {label}
      </label>
      <div className={style.labelled__content}>{children}</div>
    </div>
  );
};
