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
// import space1 from '../../imgs/space1.PNG';
// import space2 from '../../imgs/space2.PNG';
// import space3 from '../../imgs/space3.PNG';

const Book = () => {
    return (
        <>
        <Header/>
        <section>
        <div className='landing-page book-page'>
           
            <div className="connect-grid">
                <h1 className="connect">
                    Questions? Feel free to contact us and check out our social media!
                </h1>
                <div className="connect-boxes">
                    <div className="connect-box connect-contact bottom">
                        <div className="contact">
                            <h1 className="detail">Contact:</h1>
                            <h2 className="content detail">Phone: 404-553-6423</h2>
                            <h2 className="content detail">Email: lilachairstudio@gmail.com</h2>
                        </div>
                        
                    </div>
                    <div className="connect-box connect-social bottom side">
                        <a href="https://www.facebook.com/LilacHairStudioATL/">
                            <FontAwesomeIcon className="connect-social facebook" icon={faFacebookSquare} />
                        </a>
                        <a className="insta-link" href="https://www.instagram.com/lilachairstudiosatl/">
                            <FontAwesomeIcon className="connect-social insta" icon={faInstagram} />
                        </a>
                        <a href="https://www.yelp.com/biz/lilac-hair-studio-atl-atlanta">
                            <FontAwesomeIcon className="connect-social yelp" icon={faYelp} />
                        </a>
                    </div>
                    <div className="connect-box connect-book">
                        <div className="service-btn-box">
                            <Button className='service-btn' variant="contained" color="primary" href='https://kristinmealor.glossgenius.com/services'>
                                Book Now
                            </Button>
                        </div>
                    </div>   
                    <div className="connect-box connect-logo side">
                        <img className="lazyload" src={logo} alt="LOGO" />
                    </div>
                </div>
                
            </div>


        </div>
            
            <div className="content-box ">
            
                <p className='content caption'>
                    Serving metro Atlanta, we're located in the My Salon Suite at Lindbergh Plaza.
                </p>
            </div>
        
       

        <MapBox/>


        </section>
        <Footer/>
        </>
    )
}

export default Book;