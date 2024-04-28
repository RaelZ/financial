import IconButton from "@/components/atoms/icon-button"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import React from "react"

interface MobileMenuProps {}

const MobileMenu: React.FC<MobileMenuProps> = () => {
  return (
    <div className="flex items-end gap-4">
      <IconButton icon={faBars} iconColor="white" iconSize="xl" />
      {/* <Image src="/assets/favicon.svg" alt="Logo" width={48} height={48} /> */}
    </div>
  )
}

export default MobileMenu
