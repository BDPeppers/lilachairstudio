import React from 'react'
import Button from '@material-ui/core/Button';
//imported components
import Header from '../features/header';
import Footer from '../features/footer';

// design assets
import logo from '../../imgs/logo.jpg'
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const Home = () => {
    return (
    <>
      <Header/>
     <section>
        <div className='landing-page'>
            <div className='landing-img-box'>
                <img src={logo} alt="LOGO" />
            </div>
            <Button className='book-btn-full' variant="contained" color="primary">
                Book An Appointment
            </Button>
        </div>

        <div className="page-cards">
            <div className="page-card">
                <h1 className="card-header">Services</h1>
                <h3 className="card-desc">Catering cuts, colors, and chemical treatments for all ages and textures</h3>
                <ArrowForwardIcon className='card-arrow'/>
            </div>
            <div className="page-card">
                <h1 className="card-header">About</h1>
                <h3 className="card-desc">Lorem Ipsum has been the industry's standard for dummy text</h3>
                <ArrowRightAltIcon className='card-arrow'/>
            </div>
            <div className="page-card">
                <h1 className="card-header">Gallery</h1>
                <h3 className="card-desc">Lorem Ipsum has been the industry's standard for dummy text</h3>
                <KeyboardArrowRightIcon className='card-arrow'/>
            </div>
            <div className="page-card">
                <h1 className="card-header">Book</h1>
                <h3 className="card-desc">Lorem Ipsum has been the industry's standard for dummy text</h3>
                <TrendingFlatIcon className='card-arrow'/>
            </div>
        </div>
     </section>
     <Footer/>
     </>
    )
}

export default Home;