import React from 'react'

//imported components
import Header from '../features/header';
import Footer from '../features/footer';
import Button from '@material-ui/core/Button';
import MapBox from '../features/mapbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faYelp, faFacebookSquare} from '@fortawesome/free-brands-svg-icons'

// design assets
import logo from '../../imgs/logo.jpg'
import space1 from '../../imgs/space1.PNG';
import space2 from '../../imgs/space2.PNG';
import space3 from '../../imgs/space3.PNG';

const Book = () => {
    return (
        <>
        <Header/>
        <section>
        <div className='landing-page book-page'>
            <div className='landing-img-box bookPage-img-box'>
                <img className="lazyload" src={logo} alt="LOGO" />
            </div>
            <div className="content-box book-box">
                <h2 className="content book-header">Questions? Feel free to contact us and check out our social media!</h2>
                <br/>
                <h2 className="content detail">Phone: 404-553-6423</h2>
                <br/>
                <h2 className="content detail">Email: lilachairstudio@gmail.com</h2>
                <div className='foot-sect foot-social-sect book-social'>
                    <a href="https://www.facebook.com/LilacHairStudioATL/">
                        <FontAwesomeIcon className="foot-social facebook" icon={faFacebookSquare} />
                    </a>
                    <a className="insta-link" href="https://www.instagram.com/lilachairstudiosatl/">
                        <FontAwesomeIcon className="foot-social insta" icon={faInstagram} />
                    </a>
                    <a href="https://www.yelp.com/biz/lilac-hair-studio-atl-atlanta">
                        <FontAwesomeIcon className="foot-social yelp" icon={faYelp} />
                    </a>
                </div>

            </div>
        </div>
            
            <div className="content-box ">
            <h1 className="content content-header">Salon</h1>
            <div className="img-collage">
                <img className='content-img salon' src={space1} alt="Atlanta Salon"/>
                <img className='content-img salon' src={space2} alt="Atlanta Salon"/>
            </div>
            <p className='content caption'>
                SEO content -> Search Goals: Atlanta Studio, Best salon in Atlanta, Atlanta Hair Salon, Atlanta Hair, Atlanta Hair Stylist, Atlanta Hair Color, Atlanta Hair Colorist
            </p>
        </div>
        
        <div className="content-box ">
            <h1 className="content content-header">Products</h1>
            <div className="img-collage">
                <img className='content-img products' src={space3} alt="Davine's Hair"/>
            </div>
            <p className='content caption'>
                We use Davine's  Sustainable hair care products, made from all natural ingredients and manufactured using only renewable energy.
            </p>
            <a className="content-link" href="http://https://us.davines.com/">https://us.davines.com/</a>
        </div>

        <MapBox/>

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

export default Book;