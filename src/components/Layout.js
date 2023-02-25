import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import styles from "./css/Layout.module.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
