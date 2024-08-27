"use client"
import { Input } from 'antd';
import React from 'react'
import { Controller , useFormContext } from 'react-hook-form';

interface IInput {
    type?: string;
    name: string;
    label?: string;
    size?: 'large' | 'small';
    value?: string| string[]| undefined;
    id?: string;
    placeholder?: string;
    validation?: object
}

const FormInput = ({name,type,size,label,value,id,placeholder,validation}:IInput) => {
    const {control} = useFormContext()
  return (
   <>
   {label? label : null}
    <Controller
    control={control}
    name={name}
    render={({ field}) => (
      type === 'password' ?
     <Input.Password
      type= {type}
      size={size}
      placeholder={placeholder}
      {...field}
      value={value? value : field.value}
      /> : <Input
      type= {type}
      size={size}
      placeholder={placeholder}
      {...field}
      value={value? value : field.value}
      />
    )}
  /></>
  )
}

export default FormInput
