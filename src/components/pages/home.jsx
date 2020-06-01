import React from 'react'
import {Link} from 'react-router-dom';

//imported components
import Header from '../features/header';
import Footer from '../features/footer';
import Button from '@material-ui/core/Button';
// design assets

import logo from '../../imgs/logo.jpg'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const Home = () => {
    return (
    <>
      <Header/>
     <section>
        <div className='landing-page home'>
            <div className='landing-img-box'>
                <img className="lazyload" src={logo} alt="LOGO" />
            </div>
            <Button className='book-btn-full' variant="contained" color="primary" href='https://kristinmealor.glossgenius.com/services'>
                Book Now
            </Button>
        </div>

        <div className="page-card-wrap">
            
            <div className="page-cards">
                {/* <Link to='/lilachairstudio/Services'></Link> */}
                <div className="page-card right-border">
                    <h1 className="card-header">Services</h1>
                    <h3 className="card-desc">Catering cuts, colors, and chemical treatments for all ages and textures.</h3>
                    <Link to='/lilachairstudio/Services'>
                        <KeyboardArrowRightIcon className='card-arrow'/>
                    </Link>
                </div>
                <div className="page-card">
                    <h1 className="card-header">About</h1>
                    <h3 className="card-desc">Where Tranquility Meets Passion...meet the owner</h3>
                    <Link to='/lilachairstudio/About'>
                        <KeyboardArrowRightIcon className='card-arrow'/>
                    </Link>
                </div>
                <div className="page-card right-border">
                    <h1 className="card-header">Gallery</h1>
                    <h3 className="card-desc">
                        Find inspiration for your new look... 
                    </h3>
                    <Link to='/lilachairstudio/Gallery'>
                        <KeyboardArrowRightIcon className='card-arrow'/>
                    </Link>
                </div>
                <div className="page-card top-border">
                    <h1 className="card-header">Connect</h1>
                    <h3 className="card-desc">Find about more about the studio, get in touch, and feel welcomed</h3>
                    <Link to='/lilachairstudio/Book'>
                        <KeyboardArrowRightIcon className='card-arrow'/>
                    </Link>
                </div>
            </div>
        </div>
     </section>
     <Footer/>
     </>
    )
}

export default Home;