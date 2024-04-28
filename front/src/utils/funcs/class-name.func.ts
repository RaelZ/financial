export const hoverClassName = (className: string) => {
  const classNameArray = className.split(" ")
  const hoverClassNameArray = classNameArray.map(
    (className) => `hover:${className}`
  )

  return [...hoverClassNameArray].join(" ")
}

export const focusClassName = (className: string) => {
  const classNameArray = className.split(" ")
  const focusClassNameArray = classNameArray.map(
    (className) => `focus:${className}`
  )

  return [...focusClassNameArray].join(" ")
}

export const activeClassName = (className: string) => {
  const classNameArray = className.split(" ")
  const activeClassNameArray = classNameArray.map(
    (className) => `active:${className}`
  )

  return [...activeClassNameArray].join(" ")
}

export const disabledClassName = (className: string) => {
  const classNameArray = className.split(" ")
  const disabledClassNameArray = classNameArray.map(
    (className) => `disabled:${className}`
  )

  return [...disabledClassNameArray].join(" ")
}
