import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';

export default function NavBar() {
  return (
    <>
      <header>
        <nav className='container'>
            <div className="logo">
                <Link className='logoName' to="/">START FRAMEWORK</Link>

            </div>
            <ul className="links">
                <li>
                    <Link className='link' to="/about">ABOUT</Link>
                </li>
                <li>
                    <Link className='link' to="/portfolio">PORTFOLIO</Link>
                </li>
                <li>
                    <Link className='link' to="/contact">CONTACT</Link>
                </li>
            </ul>
        </nav>
      </header>
    </>
  )
}
