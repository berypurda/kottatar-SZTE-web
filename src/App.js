import "./App.css"

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { useAuthContext } from "./hooks/useAuthContext"

import Navbar from "./components/Navbar"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Home from "./pages/home/Home"
import Score from "./pages/score/Score"
import Upload from "./pages/upload/Upload"
import Uploaded from "./pages/uploaded/Uploaded"
import Pdf from "./components/Pdf"

function App() {
  const { user, authIsReady } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <div className="container">
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={user ? <Uploaded /> : <Navigate to="/login" />}
              />
              <Route
                path="/login"
                element={user ? <Navigate to="/upload" /> : <Login />}
              />
              <Route
                path="/signup"
                element={user ? <Navigate to="/upload" /> : <Signup />}
              />
              <Route
                path="/upload"
                element={user ? <Upload /> : <Navigate to="/uploaded" />}
              />
              <Route
                path="/uploaded"
                element={user ? <Uploaded /> : <Navigate to="/login" />}
              />
              <Route
                path="/scores/:id"
                element={user ? <Score /> : <Navigate to="/login" />}
              />
              <Route
                path="/pdf"
                element={
                  user ? (
                    <Pdf
                      url={
                        "https://firebasestorage.googleapis.com/v0/b/kottatar-szte.appspot.com/o/scores%2FeWGoeug3b2UZJbo7wJa1ODojfLB3%2FPortraits%20de%20quelques%20musiciens%20illustres%2C%20Op.33%20(Metzdorff%2C%20Richard)?alt=media&token=7b66279c-417d-4fbe-b93f-cb5e66e9b789"
                      }
                    />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  )
}

export default App

