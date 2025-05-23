import React from 'react'
import HeroImage from '../../assets/aboutmeimage.svg'

export default function About() {
    return (
        <div className="about">
            <div className='aboutTextContainer'>
                <div className='aboutText '>
                    <h1>about me.</h1>
                
                    <span className='aboutDescription  '>
                        I'm a designer with expertise in photography,
                         graphic design, video editing, and branding,
                          and I'm also a website developer. I specialize
                           in crafting compelling visuals that tell
                            stories and connect with audiences. With
                             a keen eye for detail and a passion for 
                             creativity, I bring visions to life through
                              innovative design solutions.
                    </span>
                </div>
            </div>
            <div className='aboutImageContainer'>
                <img className='aboutImage' src={HeroImage} alt=""/>
            </div>
        </div>
    );
} 