import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>MD</div>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='projects'
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to='tutorials'
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Tutorials
            </NavLink>
          </li>
          <li>
            <NavLink
              to='blog'
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
