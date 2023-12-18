import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Fields from "./field/Field";
import Button from "../button/Button";

const Form = ({ fields, onSubmit, isLoading, values, defaultValues, validation, submit = "Submit" }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    values,
    defaultValues,
    resolver: !validation ? undefined : yupResolver(validation),
  });

  return (
    <form
      onSubmit={!onSubmit ? undefined : handleSubmit(onSubmit)}
      className="flex flex-col gap-5"
    >
      <div className="flex flex-col gap-5">{
        fields?.map((field, idx) => {
          const items = field.section ? field.items : [field];
          return (
            <div key={idx} className="w-full flex flex-col gap-2">
              {field.section && (
                <h1 className="text-secondary text-lg font-bold">
                  {field.section}
                </h1>
              )}
              {items?.map((item, index) => (
                <Fields
                  key={index}
                  item={item}
                  register={register}
                  watch={watch}
                  setValue={setValue}
                  errors={errors}
                />
              ))}
            </div>
          );
        })
      }</div>

      {onSubmit && (
        <Button isLoading={isLoading} variant="primary">
          {submit}
        </Button>
      )}
    </form>
  );
};

export default Form;
