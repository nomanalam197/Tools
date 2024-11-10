import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Convert from './Components/Convert.jsx'
import Date from './Components/Date.jsx'
import Navbar from './Components/Navbar.jsx'
import ErrorBoundary from './Components/ErrorBoundary.jsx'

function App() {

  return (
    <>
    <ErrorBoundary>

      <Navbar />
      <Convert />
      <Date />

    </ErrorBoundary>
    </>
  )
}

export default App
