import React from "react"
import styles from "./About.module.css"

const About = ({ children, title }) => {
  return (
    <div className={styles.about}>
      <h1>{title}</h1>
      {children}
    </div>
  )
}

export default About
