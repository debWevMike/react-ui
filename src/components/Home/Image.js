import React from "react"
import styles from "./Image.module.css"

const Image = ({ src, alt }) => {
  return <img src={src} className={styles.photo} alt={alt} />
}

export default Image
