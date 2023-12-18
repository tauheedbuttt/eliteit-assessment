import React from "react";

const Field = ({
  item,
  register,
  errors,
}) => {
  function accessNestedField(obj, path) {
    const keys = path.match(/\w+/g); // Match words and ignore brackets
    let currentObj = obj;

    if (keys)
      for (const key of keys) {
        if (currentObj?.hasOwnProperty(key) || Array.isArray(currentObj)) {
          currentObj = currentObj[key];
        } else {
          return undefined;
        }
      }

    return currentObj;
  }

  const errorObject = accessNestedField(errors, item.name);
  const error = errorObject?.message?.toString();
  const border = error ? "border-primary" : "border-border";

  return (
    <div className={item.container ? item.container : "w-full"}>
      {item.type !== "file" && item.label && (
        <label htmlFor={item.name} className="text-[13px]">
          {item.label}
        </label>
      )}
      <div
        className={
          item.type !== "file" && item.type !== "dropdown"
            ? `inputContainer ${border} mb-0`
            : ""
        }
      >
        <input
          type={item.type}
          id={item.name}
          placeholder={item.placeholder}
          {...register(item.name)}
          {...item.attributes}
          className={`formInput ${item.className} bg-transparent`}
        />
      </div>
      {error && <span className={`formError`}>{error}</span>}
    </div>
  );
};

export default Field;