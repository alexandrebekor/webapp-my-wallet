import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Transaction from './pages/Transaction'

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="about" element={<About />} />
      <Route path="mes/:date" element={<Transaction />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
