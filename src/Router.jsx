import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import InputForm from './pages/InputForm'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/input" element={<InputForm />} />
      </Routes>
    </BrowserRouter>
  )
}