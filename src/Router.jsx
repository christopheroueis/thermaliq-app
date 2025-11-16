import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import InputForm from './pages/InputForm'
import Loading from './pages/Loading'
import Results from './pages/Results'
import Consent from './pages/Consent'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/input" element={<InputForm />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/results" element={<Results />} />
        <Route path="/consent" element={<Consent />} />
      </Routes>
    </BrowserRouter>
  )
}