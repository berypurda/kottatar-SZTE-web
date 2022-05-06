import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"
import ModeSelector from './ModeSelector'
import "./Navbar.css"


export default function Navbar() {
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()
  
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <Link to="/" className="brand">SZTE Kottatár</Link>
        </li>
        
        {user && (
          <li>
            <Link to="/search">
              <button className="nav-btn">Keresés</button>
            </Link>  
          </li>
        )}
        
        {user && (
          <li>
            <Link to="/upload">
            <button className="nav-btn">Feltöltés</button>
            </Link>
          </li>
        )}

        {user && (
          <li>
            <Link to="/uploaded">
            <button className="nav-btn">Kották</button>
            </Link>
          </li>
        )}

        {!user && (
          <>
            <li>
              <Link to="/login">
                <button className="nav-btn">Bejelentkezés</button>
                </Link>
            </li>
            <li>
              <Link to="/signup">
              <button className="nav-btn">Regisztráció</button>
              </Link>
            </li>
          </>
        )}

        {user && (
          <li>
            {!isPending && (
              <button className="btn" onClick={logout}>
                Kijelentkezés
              </button>
            )}
            {isPending && (
              <button className="btn" disabled>
                Kijelentkezés..
              </button>
            )}
          </li>
          
        )}
          <ModeSelector />
        
      </ul>
    </div>
  )
}

