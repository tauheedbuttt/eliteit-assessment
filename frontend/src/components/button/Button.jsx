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
      text: "white",
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
      className={`${color.bg} gap-4 px-5 flex justify-center items-center py-2 text-sm  w-full  text-${color.text} shadow-sm ${color.hover} ${className} `}
    >
      <Loader size={20} isLoading={isLoading} color={color.text}>
        {children}
      </Loader>
    </button>
  );
}

export default Button;
