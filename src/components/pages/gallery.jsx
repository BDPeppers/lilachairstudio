import React from 'react';

//imported components
import Header from '../features/header';
import Footer from '../features/footer';
import Carousel from '../features/carousel'





const Gallery = () => {
    return (
        <>
        <Header/>
        <section>
            <div className="content-box ">
                <h1 className="content content-header service-header">Lorem ipsum is placeholder text</h1>
            </div>
            <Carousel />
        </section>
        <Footer/>
        </>
    )
}

export default Gallery;