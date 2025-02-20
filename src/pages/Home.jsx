import logo from '../assets/heroimage.svg'
import Navbar from '../components/navbar';

export default function Hero() {
    return (
        <>
            <Navbar />
            <div className="hero">

                <div className='heroImageContainer'>
                    <img className='heroImage' src={logo} alt=""/>
                </div>
                <div>
                    <div className='heroText'>
                        <h1>Hi, I'm</h1>
                        <h1 className='heroProfile'>Khalil M. Undo</h1>
                    </div>
                    <div className='heroButtons'>
                        <button className='btn custombtn'>Download CV</button>
                        <button className='btn custombtn'>My Projects</button>
                    </div>
                    <br />
                    <hr />
                    <p className='heroDescription'>
                        A designer and web developer passionate about transforming ideas into visual masterpieces.
                    </p>
                </div>
            </div>
        </>
    );
  }
  
