import React from "react"
import HomePageContent from "../components/Home/Content"

const HomePage = () => {
  return <HomePageContent />
}

export default HomePage

export const loader = async () => {
  console.log("loader hit")
  return null
  // return await Storage.get("MikesResume.pdf", {
  //   level: "public",
  // })
}
