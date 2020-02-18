import React from 'react'
import {Link} from 'react-router-dom'
import flower from '../../imgs/flower.PNG'
import Nav from './nav'


const Header  = () => {
    return (
     <header>
         <nav>  
            <div className='nav-flower'>
                <img src={flower} alt="flower"/>
            </div>
            <div className='desktop-links'>
                <div>
                    <Link>About</Link>
                </div>
                <div>
                    <Link>Services</Link>
                </div>
                <div>
                    <Link>Gallery</Link>
                </div>
                <div>
                    <Link>Book</Link>
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