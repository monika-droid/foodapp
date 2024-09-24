import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='Footer' id='footer'>
        <div className="footer-content">
            <div className="leftContent">
                <img src={assets.logo} alt="" />
            </div>
            <div className="centerContent">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam obcaecati officia quia harum magnam accusantium, ab iure maxime aliquam incidunt adipisci quod. Itaque facere ipsum eos necessitatibus, eveniet vitae nulla excepturi nihil!</p>
                
            </div>
            <div className="right">

            </div>
        </div>
    </div>
  )
}

export default Footer