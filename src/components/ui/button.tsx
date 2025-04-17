import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<"button"> {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}

export const Button = ({
  type = "button",
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  const buttonClasses = {
    primary: twMerge(
      "px-6 py-3 rounded-2xl cursor-pointer font-medium text-white border border-blue-500 bg-blue-500 hover:border-blue-600 hover:bg-blue-600 duration-300",
      className
    ),
    ghost: twMerge(
      "px-6 py-3 rounded-2xl cursor-pointer font-medium border border-gray-200 hover:bg-gray-200 duration-300 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:border-gray-100 disabled:text-gray-600",
      className
    ),
  };

  if (variant === "primary") {
    return (
      <button type={type} className={buttonClasses[variant]} {...props}>
        {children}
      </button>
    );
  }

  if (variant === "ghost") {
    return (
      <button type={type} className={buttonClasses[variant]} {...props}>
        {children}
      </button>
    );
  }
};
