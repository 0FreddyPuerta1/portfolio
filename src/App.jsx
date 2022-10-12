import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import NavBar from './components/NavBar/NavBar'
import './App.css'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AboutMe/>}/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
