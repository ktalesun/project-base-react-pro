import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom"

import logo from "../assets/react.svg";
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";

const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="React Logo" />
                <ul>
                    <li>
                        <NavLink to="/home" className={({ isActive }) => isActive ? 'nav-active' : ''}>Shopping Page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users" className={({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
                    </li>
                </ul>
            </nav>
            <div>
                <Routes>
                    <Route path="about" element={<h1> About Page</h1>} />
                    <Route path="users" element={<h1> User Page</h1>} />
                    <Route path="home" element={ <ShoppingPage />} />

                    <Route path="/*" element={ <Navigate to="/home" replace /> } />
                </Routes>
            </div>
        </div>
    </BrowserRouter>
  )
}

export default Navigation
