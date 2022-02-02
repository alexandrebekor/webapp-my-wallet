import { Route, Routes } from "react-router-dom"
import About from "./about"
import Home from "./Home"
import NotFound from "./NotFound"
import Teste from "./Teste"

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="mes" element={<Teste />} >
        <Route path=":date" element={<Teste />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
