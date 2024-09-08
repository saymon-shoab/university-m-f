"use client";
import React, { useState, useEffect } from "react";
import { Button, message, Steps } from "antd";
import { FormProvider, useForm } from "react-hook-form";
import { getFromLocalStorage, setToLocalStorage } from "@/utills/local_storage";
import { useRouter } from "next/navigation";

interface ISteps {
  title?: string;
  content?: React.ReactElement | React.ReactNode;
}
interface IStepsProps {
  steps: ISteps[];
  submitHandler: (er: any) => void;
  navigateLink?: string;
  parsistKey: string
}
const SteperForm = ({ steps, submitHandler, navigateLink , parsistKey}: IStepsProps) => {
  const router = useRouter();
  const [current, setCurrent] = useState<number>(
    !!getFromLocalStorage("step")
      ? Number(JSON.parse(getFromLocalStorage("step") as string).step)
      : 0
  );
  const [savedValues, setSavedValues] = useState(
    !!getFromLocalStorage(parsistKey)
      ? JSON.parse(getFromLocalStorage(parsistKey) as string)
      : ""
  );
  useEffect(() => {
    setToLocalStorage("step", JSON.stringify({ step: current }));
  }, [current]);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const methods = useForm({defaultValues:savedValues});
  const watch = methods.watch()
  useEffect(() => {
    setToLocalStorage(parsistKey, JSON.stringify(watch));
  }, [watch, parsistKey, methods]);

  const { handleSubmit, reset } = methods;
  const handleSutdentOnSubmit = (data: any) => {
    submitHandler(data);
    reset();
    setToLocalStorage("step", JSON.stringify({ step: 0 }));
    setToLocalStorage(parsistKey, JSON.stringify({}));
    navigateLink && router.push(navigateLink);
  };
  return (
    <>
      <Steps current={current} items={items} />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleSutdentOnSubmit)}>
          <div>{steps[current].content}</div>
          <div>
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => message.success("Processing complete!")}
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default SteperForm;
