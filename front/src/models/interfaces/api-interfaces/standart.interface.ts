import { UUID } from "crypto"

export interface IStandart {
  id: UUID
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}
