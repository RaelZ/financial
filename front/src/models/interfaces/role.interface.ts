import { EStatus } from "../enums"
import { IStandart } from "./api-interfaces/standart.interface"

export interface IRole extends IStandart {
  name: string
  description: string
  status: EStatus
}
