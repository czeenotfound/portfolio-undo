import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import cv from '../../assets/Resumeee.pdf'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!isHomePage) return;
        
        const handleNavLinkClick = (event) => {
            if (!event.currentTarget.getAttribute("href").startsWith("#")) return;
            
            event.preventDefault();

            const targetId = event.currentTarget.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const originalOffset = targetSection.getBoundingClientRect().top + window.scrollY;
                
                const extraMargin = 80;
                
                window.scrollTo({
                    top: originalOffset - extraMargin,
                    behavior: "smooth"
                });
                
                if (isOpen) {
                    setIsOpen(false);
                }
            }
        };

        document.querySelectorAll("nav a[href^='#']").forEach(anchor => {
            anchor.addEventListener("click", handleNavLinkClick);
        });

        return () => {
            document.querySelectorAll("nav a[href^='#']").forEach(anchor => {
                anchor.removeEventListener("click", handleNavLinkClick);
            });
        };
    }, [isOpen, isHomePage]);

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#01120e]/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Khalil Undo</span>
                </Link>
                
                {/* Mobile Menu Button */}
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <a 
                        href={cv} 
                        download="Khalil_Undo_Resume.pdf" 
                        className="hidden md:block text-white bg-[#022f23] hover:bg-[#d5e2ce] hover:text-[#23424A] py-2 px-4 rounded-full transition-all duration-300 text-sm"
                    >
                        Download CV
                    </a>
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        type="button" 
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none" 
                        aria-controls="navbar-menu" 
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        {!isOpen ? (
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </button>
                </div>
                
                {/* Navigation Links - Desktop */}
                <div className={`items-center justify-between ${isOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1`} id="navbar-menu">
                    <ul className="flex flex-col gap-6 font-medium text-center p-1 md:p-0 mt-4 rounded-lg rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        {isHomePage ? (
                            <>
                                <li className="nav__item">
                                    <a href="#home" className="block py-4 px-3 md:p-0 text-white rounded-md md:rounded-none md:bg-transparent" aria-current="page">Home</a>
                                </li>
                                <li className="nav__item">
                                    <a href="#about" className="block py-4 px-3 md:p-0 text-white rounded-md md:rounded-none md:bg-transparent">About</a>
                                </li>
                                <li className="nav__item">
                                    <a href="#experience" className="block py-4 px-3 md:p-0 text-white rounded-md md:rounded-none md:bg-transparent">Experience</a>
                                </li>
                                <li className="nav__item">
                                    <a href="#projects" className="block py-4 px-3 md:p-0 text-white rounded-md md:rounded-none md:bg-transparent">Projects</a>
                                </li>
                                <li className="nav__item">
                                    <a href="#blog" className="block py-4 px-3 md:p-0 text-white rounded-md md:rounded-none md:bg-transparent">Blog</a>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav__item">
                                    <Link to="/#home" className="block py-4 px-3 md:p-0 text-white rounded-md md:rounded-none md:bg-transparent">Home</Link>
                                </li>
                                <li className="nav__item">
                                    <Link to="/#about" className="block py-4 px-3 md:p-0 text-white rounded-md md:rounded-none md:bg-transparent">About</Link>
                                </li>
                                <li className="nav__item">
                                    <Link to="/#experience" className="block py-4 px-3 md:p-0 text-white rounded-md md:rounded-none md:bg-transparent">Experience</Link>
                                </li>
                                <li className="nav__item">
                                    <Link to="/#projects" className="block py-4 px-3 md:p-0 text-white rounded-md md:rounded-none md:bg-transparent">Projects</Link>
                                </li>
                                <li className="nav__item">
                                    <Link to="/#blog" className="block py-4 px-3 md:p-0 text-white rounded-md md:rounded-none md:bg-transparent">Blog</Link>
                                </li>
                            </>
                        )}
                        <li className="md:hidden mt-4">
                            <a 
                                href={cv} 
                                download="Khalil_Undo_Resume.pdf" 
                                className="inline-block py-2 px-4 bg-[#022f23] hover:bg-[#d5e2ce] hover:text-[#23424A] text-white rounded-full transition-all duration-300"
                            >
                                Download CV
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
  
