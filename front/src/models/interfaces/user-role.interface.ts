import { UUID } from "crypto"
import { IRole } from "./role.interface"
import { IUser } from "./user.interface"

export interface IUserRole {
  id: UUID
  userId?: UUID
  roleId?: UUID
  user?: IUser
  role?: IRole
}
