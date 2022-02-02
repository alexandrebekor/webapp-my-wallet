import { Route, Routes } from "react-router-dom"
import About from "./about"
import Home from "./Home"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  )
}

export default App
