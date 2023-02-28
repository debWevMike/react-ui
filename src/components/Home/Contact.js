import React from "react"
import Button from "./Button"
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1>Get in Touch</h1>
      <p>
        My inbox is always open. Whether you just want to ask a question or say
        hello, I'll do my best to get back to you!
      </p>
      <Button type='link' href='mailto:mdesrochesis@gmail.com'>
        Say Hello
      </Button>
    </div>
  )
}

export default Contact
