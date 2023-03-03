import React from "react"
import styles from "./Introduction.module.css"
import Button from "./Button"
import tempResume from "../../images/MikesResume.pdf"
import { useRouteLoaderData } from "react-router-dom"

const Introduction = ({ children }) => {
  const resume = useRouteLoaderData("resume")

  console.log("Intro resume: ", resume)

  return (
    <div className={styles.intro}>
      <div className={styles.first}>
        <code>{"<HelloWorld />, my name is"}</code>
      </div>
      <div className={styles.second}>Michael DesRoches.</div>
      <div className={styles.third}>I build stuff for the Web.</div>
      {children}
      <div className={styles.btn}>
        <Button type='link' href={tempResume} download='MikesResume.pdf'>
          Resume
        </Button>
      </div>
    </div>
  )
}

export default Introduction
