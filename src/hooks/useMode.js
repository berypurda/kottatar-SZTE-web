import { useContext } from "react"
import { ModeContext } from "../context/ModeContext"

export const useMode = () => {
  const context = useContext(ModeContext)

  if (context === undefined) {
    throw new Error("A useMode() hooknak egy ModeProvider-ben kell lennie")
  }

  return context
}