import React from "react"
import { Outlet } from "react-router-dom"
import Layout from "../components/Root/Layout"

const RootLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default RootLayout
