import React from "react"

interface ButtonProps {
  text: string
  onClick: () => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
  type = "button",
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded ${className}`}
    >
      {text}
    </button>
  )
}

export default Button
