import { Routes, Route } from 'react-router-dom'
import SideBar from './components/SideBar'

// Pages
import MainLayout from './pages/MainLayout'
import NotFound from './pages/NotFound'


function App() {
  return (
    <div className='flex min-h-screen'>
      <SideBar />
      <div className='w-4/5'>
        <Routes>
          <Route path='/' element={<MainLayout />} />
          <Route path='/projects' element={<MainLayout />} />
          <Route path='/teams' element={<MainLayout />} />
          {/* Catch all */}
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
