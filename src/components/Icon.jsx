import React from 'react'
import  Nexa from "../assets/Nexa.jpeg"
import './Icon.css'

function Icon() {


  return (
    <div className='icon'>
        <div id='svg-component'>
          <img src={Nexa} style={{

            width:380,
            height:380

          }}/>
          <h1 style={{
            fontSize:235,
            fontFamily:"Averta, sans-serif",
            position:"relative",
            right:60,
            color:"#0D1625"

          }}>EXALAB</h1>

        </div>
    </div>
  )
}

export default Icon
