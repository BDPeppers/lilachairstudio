import React from 'react';

//imported components
import Button from '@material-ui/core/Button';
import Header from '../features/header';
import Footer from '../features/footer';
import GalleryScroll from '../features/galleryScroll';




const Gallery = () => {
    return (
        <>
        <Header/>
        <section>
            <div className="content-box ">
                <h1 className="content content-header service-header">Hair Gallery</h1>
            </div>
            
            <GalleryScroll/>

            <div className="service-btn-box">
                <Button className='service-btn' variant="contained" color="primary" href='https://kristinmealor.glossgenius.com/services'>
                    Book Now
                </Button>
            </div>

        </section>
        <Footer/>
        </>
    )
}

export default Gallery;