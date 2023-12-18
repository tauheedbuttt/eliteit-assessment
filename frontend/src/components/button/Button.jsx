import Loader from "../loader/Loader";

function Button({
  onClick,
  type,
  variant = "primary",
  children,
  className = "",
  disabled,
  isLoading,
}) {
  const variants = {
    primary: {
      bg: "bg-primary",
      hover: "hover:opacity-90",
      text: "accent",
    },
    secondary: {
      bg: "bg-primary-light",
      hover: "hover:opacity-90",
      text: "accent",
    },
    accent: {
      bg: "bg-accent border-[1px] border-primary",
      hover: "hover:bg-primary hover:text-white",
      text: "primary",
    },
  };
  const color = variants[variant];

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${className} ${color.bg} gap-4 px-5 flex justify-center items-center py-2 text-sm  w-full  text-${color.text} shadow-sm ${color.hover} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${color.outline}`}
    >
      <Loader isLoading={isLoading}>{children}</Loader>
    </button>
  );
}

export default Button;
