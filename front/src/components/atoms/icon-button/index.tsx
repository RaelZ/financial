import { disabledClassName, hoverClassName } from "@/utils/funcs"
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome"
import React from "react"

type IconButtonProps = {
  iconColor: FontAwesomeIconProps["color"]
  iconSize: FontAwesomeIconProps["size"]
  icon: IconDefinition
  disabled?: boolean
  className?: string
  classNameHover?: string
  classNameDisabled?: string
}

const IconButton: React.FC<IconButtonProps> = ({
  iconColor,
  iconSize,
  icon,
  disabled = false,
  className = "transition duration-300 ease-in-out",
  classNameHover = "bg-[#ffffff1f]",
  classNameDisabled = "opacity-50",
}) => {
  const hoverClass = hoverClassName(classNameHover)
  const disableClass = disabledClassName(classNameDisabled)

  return (
    <button
      disabled={disabled}
      className={`flex items-center justify-center p-2 cursor-pinter rounded-md ${className} ${hoverClass} ${disableClass}`}
    >
      <FontAwesomeIcon icon={icon} color={iconColor} size={iconSize} />
    </button>
  )
}

export default IconButton
