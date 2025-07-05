import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import Header from './components/Header'
import DefaultLayout from './layouts/DefaultLayout'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path='/' Component={Home} />
            <Route path='/projects/:id' Component={ProjectDetail} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
