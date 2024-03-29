import React from "react"
import styles from "./Button.module.css"

const Button = ({ children, type, onClick, href, download }) => {
  let btn = (
    <button type={type} className={styles.button} onClick={onClick}>
      {children}
    </button>
  )
  if (type === "link")
    btn = (
      <a
        href={href}
        className={styles.button}
        target='_blank'
        rel='noopener noreferrer'
        download={download ? download : false}
      >
        {children}
      </a>
    )
  return btn
}

export default Button
