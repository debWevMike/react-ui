import React from "react"
import image from "../images/Mike.jpg"
import styles from "./css/HomeImage.module.css"

const HomeImage = () => {
  return <img src={image} className={styles.photo} alt='Michael DesRoches' />
}

export default HomeImage
