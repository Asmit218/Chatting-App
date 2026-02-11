import { BrowserRouter, Routes, Route } from 'react-router'
import { Homepage } from './components/home-page/hompage'
import { LoginPage } from './components/login-page/loginpage'
import { SignUpPage } from './components/signup-page/signuppage'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/homepage' element={<Homepage />} />
          <Route path='*' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )}

export default App
