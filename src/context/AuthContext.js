import { createContext, useReducer, useEffect } from "react"
import { projectAuth } from "../firebase/config"

// kontextus létrehozás a beépített react kontextus kezelővel
export const AuthContext = createContext()

// állapotok lekezelése
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload }
    case "LOGOUT":
      return { ...state, user: null }
    case "AUTH_IS_READY":
      return { user: action.payload, authIsReady: true }
    default:
      return state
  }
}

// komponens létrejötte előtt alapértelmezetten, ne legyen
// betöltött állapotban a felhasználókezelés
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  })
  // kompopnens létrejöttekor állítsuk készre a felhasználókezelést
  useEffect(() => {
    const unsub = projectAuth.onAuthStateChanged((user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user })
      unsub()
    })
  }, [])

  // adjuk tovább minden gyermek modulnak az állapotot
  // és az üzenetet
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

