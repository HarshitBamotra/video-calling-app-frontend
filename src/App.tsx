import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Room from './pages/Room'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/room/:id" element={<Room></Room>}></Route>
      </Routes>
    </>
  )
}

export default App
