'use client'
import { DatePicker, DatePickerProps } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, {Dayjs} from 'dayjs';

type UMDatePickerProps = {
  onChange?: (valOne:Dayjs, valTwo:string) => void;
  name: string;
  label?: string;
  value?: Dayjs;
  size?:"large"| "small"
};

const FormDatePicker = ({
  name,
  label,
  onChange,
  size
}: UMDatePickerProps) => {
  const { control , setValue } = useFormContext();
  const handleOnChange: DatePickerProps['onChange'] = (date, dateString) => {
    // console.log(date.toISOString());
    const formatedDate = date.toISOString()
    //@ts-ignore
    onChange? onChange(formatedDate,dateString as string) : null;
    // console.log(date, dateString);
    setValue(name,formatedDate)
  };
  return (
    <div className={`flex flex-col  w-full`}>
      <p style={{marginBottom:"3px"}}>  {label ? label : null} </p>
     
      <Controller
        name={name}
        control={control}
        render={({ field }) => <DatePicker defaultValue={dayjs(field.value) || Date.now()} size={size} onChange={handleOnChange} style={{width:"100%"}} />
      }
      />
    </div>
  );
};

export default FormDatePicker;
