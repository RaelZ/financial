export type TMenuContext = {
  isMobile: boolean
  isOpen: boolean
  setIsMobile: (arg: boolean) => void
  setIsOpen: (arg: boolean) => void
  handleDisablePaths: () => boolean
}
