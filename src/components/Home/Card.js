import React from "react"
import Button from "./Button"
import styles from "./Card.module.css"

const Card = ({ children, title, stack, href, inProgress }) => {
  const stackList =
    stack &&
    stack.length > 0 &&
    stack.map((item, index) => <li key={index}>{item}</li>)

  return (
    <div className={styles.card}>
      <h3>
        <a href={href} target='_blank' rel='noopener noreferrer'>
          {title}
        </a>
      </h3>
      <p>{children}</p>
      {stackList && stackList.length > 0 && (
        <ul className={styles.list}>{stackList}</ul>
      )}
      {inProgress && (
        <div className={styles["in-progress"]}>project is in progress</div>
      )}
    </div>
  )
}

export default Card
