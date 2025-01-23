import logo from '../assets/heroimage.svg'

export default function Hero() {
    return (
        <div className="hero">

            <div>
                <img className='heroImage' src={logo} alt="" />
            </div>
            <div>
                <div>
                     <h1>Hi, I'm</h1>
                    <h1 className='heroProfile'>Khalil M. Undo</h1>
                </div>
                <div className='heroButtons'>
                    <button className='btn custombtn'>About Me</button>
                    <button className='btn custombtn'>My Projects</button>
                </div>
                <br />
                <hr />
                <p className='heroDescription'>
                    A designer and web developer passionate about transforming ideas into visual masterpieces.
                </p>
            </div>
        </div>
    );
  }
  
