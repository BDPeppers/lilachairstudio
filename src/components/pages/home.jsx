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
        <div className='landing-page'>
            <div className='landing-img-box'>
                <img src={logo} alt="LOGO" />
            </div>
            <Button className='book-btn-full' variant="contained" color="primary" href='https://kristinmealor.glossgenius.com/'>
                Book An Appointment
            </Button>
        </div>

        <div className="page-cards">
            <div className="page-card">
                <h1 className="card-header">Services</h1>
                <h3 className="card-desc">Catering cuts, colors, and chemical treatments for all ages and textures</h3>
                <Link to='/Services'>
                    <KeyboardArrowRightIcon className='card-arrow'/>
                </Link>
                
            </div>
            <div className="page-card">
                <h1 className="card-header">About</h1>
                <h3 className="card-desc">Lorem Ipsum has been the industry's standard for dummy text</h3>
                <Link to='/About'>
                    <KeyboardArrowRightIcon className='card-arrow'/>
                </Link>
            </div>
            <div className="page-card">
                <h1 className="card-header">Gallery</h1>
                <h3 className="card-desc">Lorem Ipsum has been the industry's standard for dummy text</h3>
                <Link to='/Gallery'>
                    <KeyboardArrowRightIcon className='card-arrow'/>
                </Link>
            </div>
            <div className="page-card">
                <h1 className="card-header">Book</h1>
                <h3 className="card-desc">Lorem Ipsum has been the industry's standard for dummy text</h3>
                <Link to='/Book'>
                    <KeyboardArrowRightIcon className='card-arrow'/>
                </Link>
            </div>
        </div>
     </section>
     <Footer/>
     </>
    )
}

export default Home;