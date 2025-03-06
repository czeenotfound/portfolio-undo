import React from 'react'
import { Outlet, Link } from "react-router-dom";
import logo from '../../assets/heroimage.svg'
import herogradient from '../../assets/herogradient.svg'

export default function Hero() {
  return (
    <>
        
        <div className="hero">
            <div className='heroImageContainer'>
                <img className='heroImage' src={logo} alt=""/>
            </div>
            <div className='heroContent'>
                <div className='heroText'>
                    <h1>Hi, I'm</h1>
                    <h1 className='heroProfile'>Khalil M. Undo</h1>
                </div>
                <div className='heroButtons'>
                    <Link to="/About" ><button className='btn custombtn'>About Me</button></Link>
                    <button className='btn custombtn'>My Projects</button>
                </div>
                <br />
                <hr />
                <p className='heroDescription'>
                    A designer and web developer passionate about transforming ideas into visual masterpieces.
                </p>
            </div>
        </div>
        <Outlet />
    </>
  )
}
