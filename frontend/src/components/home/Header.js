import { NavLink } from 'react-router-dom'
import React from 'react'
import "./Header.css"

function Header() {
  return (

    <header className="header">
      <div className="n-name"  style={{fontFamily: "Serif"}}>Jain hotels</div>
      <div className="logo">Admin Panel</div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to='/' className={({ isActive }) => isActive ? "active" : undefined}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/admin' className={({ isActive }) => isActive ? "active" : undefined}>
              Booked Rooms
            </NavLink>
          </li>
          <li>
            <NavLink to='/createRoom' className={({ isActive }) => isActive ? "active" : undefined}>
              Create Room
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header