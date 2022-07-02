import React from 'react'
import { FaFacebookSquare,FaInstagramSquare,FaYoutubeSquare} from 'react-icons/fa'
import "./Navbar.css";


export default function Navbar() {
  return (
    <>
    <nav className='main-nav'>
        <div className='Logo'>
            <h2 className='headline'>My
            Assignment submission</h2>
        </div>
        <div className='menu-links'>
            <ul>
                <li>
                    <a  href="/">Home</a>
                </li>

                <li>
                    <a href="/about">about</a>
                </li>

                <li>
                    <a href="/Services">Services</a>
                </li>

                <li>
                    <a href="/Contacts">Contacts</a>
                </li>
            </ul>
        </div>

        <div className='social-media'>
            <ul className='social-media-desktop'>
            <li>
                    <a href="#"><FaFacebookSquare/></a>
                </li>


                <li>
                    <a href="#"><FaInstagramSquare/></a>
                </li>

                <li>
                    <a href="#"><FaYoutubeSquare/></a>
                </li>
            </ul>
           

        </div>
      
    </nav>
    <div className='details'>
        <p>Welcome to</p>
        <h1>Assignment Completion Page</h1>

    </div>
    </>
  )
}
