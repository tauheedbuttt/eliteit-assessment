import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Fields from "./field/Field";
import Button from "../button/Button";

const Form = ({
  fields,
  onSubmit,
  isLoading,
  values,
  defaultValues,
  validation,
  submit = "Submit",
}) => {
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

  const generateFields = (fields) => {
    return fields?.map((field, idx) => {
      const items = field.section ? field.items : [field];
      return (
        <div key={idx} className="w-full flex flex-col gap-2">
          {field.section && (
            <h1 className="text-secondary text-lg font-bold">
              {field.section}
            </h1>
          )}
          {items?.map((item, index) =>
            Array.isArray(item) ? (
              <div
                key={index}
                className="flex md:flex-row w-full flex-col gap-2"
              >
                {generateFields(item)}
              </div>
            ) : (
              <Fields
                key={index}
                item={item}
                register={register}
                watch={watch}
                setValue={setValue}
                errors={errors}
              />
            )
          )}
        </div>
      );
    });
  };

  return (
    <form
      onSubmit={!onSubmit ? undefined : handleSubmit(onSubmit)}
      className="flex flex-col gap-5"
    >
      <div className="flex flex-col gap-5">{generateFields(fields)}</div>

      {onSubmit && (
        <Button isLoading={isLoading} variant="primary">
          {submit}
        </Button>
      )}
    </form>
  );
};

export default Form;
