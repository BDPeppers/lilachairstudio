import React from 'react'
import {Link} from 'react-router-dom'
import flower from '../../imgs/flower.PNG'
import Nav from './nav'


const Header  = () => {
    return (
     <header>
         <nav>  
            <div className='nav-flower'>
                <Link to='/Home'>
                
                    <img className='flower' src={flower} alt="flower"/>
                </Link>
            </div>
            <div className='desktop-links'>
                <div className='desktop-link'>
                    <Link to='/About'>About</Link>
                </div>
                <div className='desktop-link'>
                    <Link to='/Services'>Services</Link>
                </div>
                <div className='desktop-link'>
                    <Link to='/Gallery'>Gallery</Link>
                </div>
                <div className='desktop-link'>
                    <Link to='/Connect'>Connect</Link>
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