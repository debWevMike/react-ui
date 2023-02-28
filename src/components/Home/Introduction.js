import React, { useEffect } from "react"
import styles from "./Introduction.module.css"
import Button from "./Button"
import resume from "../../images/MikesResume.pdf"
import { Storage } from "@aws-amplify/storage"

const Introduction = ({ children }) => {
  const getPdf = async () => {
    await Storage.get("MikesResume.pdf", {
      level: "public",
    })
  }

  const pdf = getPdf()

  useEffect(() => {
    console.log("pdf: ", pdf)
  }, [pdf])

  return (
    <div className={styles.intro}>
      <div className={styles.first}>
        <code>{"<HelloWorld />, my name is"}</code>
      </div>
      <div className={styles.second}>Michael DesRoches.</div>
      <div className={styles.third}>I build stuff for the Web.</div>
      {children}
      <div className={styles.btn}>
        <Button type='link' href={resume} download='MikesResume.pdf'>
          Resume
        </Button>
      </div>
    </div>
  )
}

export default Introduction
