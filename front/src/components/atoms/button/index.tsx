import { disabledClassName, hoverClassName } from "@/utils/funcs"
import React from "react"

type ButtonProps = {
  text: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  className?: string
  classNameHover?: string
  classNameDisabled?: string
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
  type = "button",
  className = "",
  classNameHover = "",
  classNameDisabled = "opacity-50",
}) => {
  const hoverClass = hoverClassName(classNameHover)
  const disableClass = disabledClassName(classNameDisabled)

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded ${className} ${hoverClass} ${disableClass}`}
    >
      {text}
    </button>
  )
}

export default Button
