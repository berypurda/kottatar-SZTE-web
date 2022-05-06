import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { AuthContextProvider } from "./context/AuthContext"
import { ModeProvider } from "./context/ModeContext"


ReactDOM.render(
  <React.StrictMode>
    
    <AuthContextProvider>
      <ModeProvider>
      <App /> 
      </ModeProvider> 
    </AuthContextProvider>
    
  </React.StrictMode>,
  document.getElementById("root")
)

reportWebVitals()

