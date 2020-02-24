import React from 'react'

//imported components
import Header from '../features/header';
import Footer from '../features/footer';
import Button from '@material-ui/core/Button';

// design assets
import logo from '../../imgs/logo.jpg'

const Book = () => {
    return (
        <>
        <Header/>
        <section>
        <div className='landing-page'>
            <div className='landing-img-box bookPage-img-box'>
                <img src={logo} alt="LOGO" />
            </div>
            <div className="content-box ">
                <h2 className='content'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua.
                </h2>
            </div>
            <div className="content-box">
                <h3 className="content">Questions? Feel free to contact us!</h3>
                <br/>
                <h3 className="content">Phone: 404-553-6423</h3>
                <br/>
                <h3 className="content">Email: lilachairstudio@gmail.com</h3>
            </div>
            <div className="btn-box">
                <Button className='book-btn-full' variant="contained" color="primary" href='https://kristinmealor.glossgenius.com/'>
                    Book An Appointment
                </Button>
            </div>
            
        </div>
        </section>
        <Footer/>
        </>
    )
}

export default Book;