import React from 'react'
import {Link} from 'react-router-dom'
import flower from '../../imgs/flower.PNG'
import Nav from './nav'


const Header  = () => {
    return (
     <header>
         <nav>  
            <div className='nav-flower'>
                <Link to='/lilachairstudio/Home'>
                    <img src={flower} alt="flower"/>
                </Link>
            </div>
            <div className='desktop-links'>
                <div className='desktop-link'>
                    <Link to='/lilachairstudio/About'>About</Link>
                </div>
                <div className='desktop-link'>
                    <Link to='/lilachairstudio/Services'>Services</Link>
                </div>
                <div className='desktop-link'>
                    <Link to='/lilachairstudio/Gallery'>Gallery</Link>
                </div>
                <div className='desktop-link'>
                    <Link to='/lilachairstudio/Book'>Book</Link>
                </div>
            </div>
            <div className='mobile-links'>
                <Nav/>
            </div>

         </nav>
     </header>
    )
}

export default Header;