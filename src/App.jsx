import { Navigate, Route, Routes } from 'react-router-dom'
import HomeEn from './pages/HomeEn.jsx'
import HomePt from './pages/HomePt.jsx'

function App() {
  return (
    // PT/EN routes for the portfolio content.
    <Routes>
      <Route path="/" element={<HomePt />} />
      <Route path="/en" element={<HomeEn />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
