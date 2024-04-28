"use client"
import { TChildren } from "@/models/types"
import React from "react"
import { AuthContext } from "./auth.context"

export const AuthProvider: React.FC<TChildren> = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}
