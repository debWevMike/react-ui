import React from "react"
import styles from "./css/Button.module.css"

const Button = ({ children, type, onClick }) => {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
