"use client"
import {
  activeClassName,
  disabledClassName,
  focusClassName,
  hoverClassName,
} from "@/utils/funcs"
import React from "react"

interface InputProps {
  placeholder?: string
  defaultValue?: string
  type?: "number" | "password" | "email" | "text"
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  disabled?: boolean
  className?: string
  classNameHover?: string
  classNameDisabled?: string
  classNameActive?: string
  classNameFocus?: string
}

const Input: React.FC<InputProps> = ({
  placeholder,
  defaultValue,
  type = "text",
  onChange,
  onBlur,
  onFocus,
  disabled,
  className = "",
  classNameHover = "",
  classNameDisabled = "",
  classNameActive = "",
  classNameFocus = "",
}) => {
  const hoverClass = hoverClassName(classNameHover)
  const disableClass = disabledClassName(classNameDisabled)
  const activeClass = activeClassName(classNameActive)
  const focusClass = focusClassName(classNameFocus)

  return (
    <input
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      disabled={disabled}
      className={`border border-gray-300 rounded p-2 mb-2 w-full ${className} ${hoverClass} ${disableClass} ${activeClass} ${focusClass}`}
    />
  )
}

export default Input
