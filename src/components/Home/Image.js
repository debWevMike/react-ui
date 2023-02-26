import React from "react"
import image from "../../images/Mike.jpg"
import styles from "./Image.module.css"

const Image = () => {
  return <img src={image} className={styles.photo} alt='Michael DesRoches' />
}

export default Image
