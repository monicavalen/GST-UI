import React from 'react'
import Header from './Header'
import './GST.css'
import MainHeader from './MainHeader'
import Navbar from './Navbar'
import LoginForm from './LoginForm'
import  { useState } from 'react';

const App = () => {
  const [fontSize, setFontSize] = useState(10);
    const [highContrast, setHighContrast] = useState(false);
  return (
    <div>
      <Header
                fontSize={fontSize}
                setFontSize={setFontSize}
                highContrast={highContrast}
                setHighContrast={setHighContrast}
            />
            <MainHeader fontSize={fontSize} highContrast={highContrast} />
            <Navbar fontSize={fontSize} highContrast={highContrast} />
      <LoginForm/>
    </div>
  )
}

export default App