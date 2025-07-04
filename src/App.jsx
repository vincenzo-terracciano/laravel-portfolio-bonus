import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import Header from './components/Header'


function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/projects/:id' Component={ProjectDetail} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
