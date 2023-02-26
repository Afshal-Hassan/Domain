import React from 'react'
import  Nexa from "../assets/Nexa.jpeg"
import './Icon.css'

function Icon() {


  return (
    <div className='icon'>
        <div id='svg-component'>
          <img src={Nexa} style={{

          

          }}
          
          className="nexa-icon"
          />
          <h1 style={{
      
            fontFamily:"Averta, sans-serif",
            position:"relative",
    
            color:"#0D1625",
          

          }}
          className="icon-text"
          >EXALAB</h1>

        </div>
    </div>
  )
}

export default Icon
