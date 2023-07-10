import React from 'react'
import Navbar from './components/Navbar'

import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import Mainlayout from './components/Mainlayout'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='main'>
          <Mainlayout />

          <div className='footer'>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
