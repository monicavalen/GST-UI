import React from 'react'
import finkraftLogo from './finkraft_logo_1.jpeg'
import './GST.css'

const MainHeader = ({ fontSize, highContrast }) => {
  return (
    <div className='mainHeader' style={{ backgroundColor: highContrast ? 'gray' : '#131e53', color: highContrast ? 'white' : 'white' }}>
        <div className='logo'>
            <img src={finkraftLogo} alt="Image not found" style={{width:"60px", height:"62px", marginLeft:"151px", marginTop:"-11px"}}/>

        </div>
        <div className='text' style={{marginLeft:"25px"}}>
            <h1 style={{fontSize: `${fontSize + 14}px`, marginBottom:"0px", marginTop:"-6px", fontFamily: 'Helvetica, Bold'}}>Goods and Services Tax</h1>
            <h1 style={{fontSize: `${fontSize + 11}px`, marginTop:"7px", marginBottom:"0px", fontFamily: 'Helvetica, Bold'}}>Government of India, States and Union Territories</h1>
        </div>
    </div>
  )
}

export default MainHeader