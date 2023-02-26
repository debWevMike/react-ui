import React from "react"
import styles from "./Introduction.module.css"

const Introduction = ({ children }) => {
  return (
    <div className={styles.introduction}>
      <div className={styles.first}>
        <code>{"<HelloWorld />, my name is"}</code>
      </div>
      <div className={styles.second}>Michael DesRoches.</div>
      <div className={styles.third}>I'm a full-stack Software Developer.</div>
      {children}
    </div>
  )
}

export default Introduction
