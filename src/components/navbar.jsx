
export default function Navbar() {
    return (
        <header>
            <nav className="nav">
                
                <ul className="nav__list">
                    <div className="navTitle">
                        <li class="nav__item">
                            <h2 className="navTitle">
                                Portfolio
                            </h2>
                        </li>
                    </div>
                    <div className="navButton">
                        <li className="nav__item"><a href="#">Home</a></li>
                        <li className="nav__item"><a href="#">About</a></li>
                        <li className="nav__item"><a href="#">Projects</a></li>
                        <li className="nav__item"><a href="#">Contact</a></li>
                    </div>
                </ul>
            </nav>
        </header>
    );
  }
  
