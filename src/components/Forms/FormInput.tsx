"use client";
import { getErrorMessageByPropertyName } from "@/utills/schemaValidation";
import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

interface IInput {
  type?: string;
  name: string;
  label?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
}

const FormInput = ({
  name,
  type,
  size,
  label,
  value,
  placeholder,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  // console.log("errors",errors)
  const errorMessage = getErrorMessageByPropertyName(errors, name);
  console.log("bal sal",errorMessage)
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
            />
          ) : (
            <Input
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
            />
          )
        }
      />
      <small style={{color:"red"}}>{errorMessage}</small>
    </>
  );
};

export default FormInput;
