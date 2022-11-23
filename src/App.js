import React from "react";
import { Route, Routes } from "react-router-dom"
import HomePage from "./Components/home-page"
import LandingPage from "./Components/landing-page";

const App = () => {
  return <Routes>
      <Route index element={<HomePage />}/>
      <Route exact path="/home" element={<HomePage />} />
      <Route exact path="/landing" element={<LandingPage />} />
    </Routes>
}

export default App;
