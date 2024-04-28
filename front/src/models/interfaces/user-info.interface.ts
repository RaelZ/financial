import { UUID } from "crypto"
import { IStandart } from "./api-interfaces/standart.interface"

export interface IUserInfo extends IStandart {
  userId: UUID
  socialName: string
  fullName: string
  phone: string
}
