import React from "react"
import styles from "./Introduction.module.css"
import Button from "./Button"
import resume from "../../images/MikesResume.pdf"

const Introduction = ({ children }) => {
  return (
    <div className={styles.intro}>
      <div className={styles.first}>
        <code>{"<HelloWorld />, my name is"}</code>
      </div>
      <div className={styles.second}>Michael DesRoches.</div>
      <div className={styles.third}>I build stuff for the Web.</div>
      {children}
      <div className={styles.btn}>
        <Button type='link' href={resume} download='MikesResume'>
          Resume
        </Button>
      </div>
    </div>
  )
}

export default Introduction
