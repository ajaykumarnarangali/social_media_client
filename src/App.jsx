import { Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from './pages/Home'
import Profile from "./pages/Profile"
import ProtectedRoute from './components/ProtectedRoute'
import Search from "./pages/Search"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route element={<ProtectedRoute/>}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
