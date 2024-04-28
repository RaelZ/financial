import { EStatus } from "../enums"
import { IStandart } from "./api-interfaces/standart.interface"
import { IUserInfo } from "./user-info.interface"
import { IUserRole } from "./user-role.interface"

export interface IUser extends IStandart {
  username: string
  email: string
  status: EStatus
  password?: string
  userRole: IUserRole
  userInfo: IUserInfo
}
