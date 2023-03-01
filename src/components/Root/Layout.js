import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import styles from "./Layout.module.css"
import { Amplify } from "aws-amplify"
import awsconfig from "../../aws-exports"
Amplify.configure(awsconfig)

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
