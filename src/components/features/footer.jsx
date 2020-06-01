import React from 'react'

//design assets
import RoomIcon from '@material-ui/icons/Room';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faYelp, faFacebookSquare} from '@fortawesome/free-brands-svg-icons'

const Footer  = () => {
    return (
    <footer>
        <div className="foot-wrap">

            <div className='foot-sect foot-social-sect'>
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
            <div className='foot-sect'>
                <RoomIcon className='foot-icon' />
                <div className="foot-text">
                    <h2 className="foot-detail">2531 Piedmont Rd NE STE 100</h2>
                    <h2 className="foot-detail">Suite 113</h2>
                    <h2 className="foot-detail">Atlanta, GA 30324</h2>
                    <h2 className="foot-detail">Located inside of My Salon Suite</h2>
                    <a className='foot-link' href='https://goo.gl/maps/N4mYzB4GbMmnLemB7'>
                        <h2 className="foot-detail">View on map</h2>
                    </a>
                </div>
                
            </div>
            <div className='foot-sect foot-hours'>
                <WatchLaterIcon className='foot-icon' />
                <div className="foot-text">
                    <div className="format">
                        <h2 className="day">MON:</h2>
                        <h2 className="time">CLOSED</h2>
                    </div>
                    <div className="format">
                        <h2 className="day">TUE:</h2>
                        <h2 className="time">12PM - 6PM</h2>
                    </div>
                    <div className="format">
                        <h2 className="day">WED:</h2>
                        <h2 className="time">10AM - 4PM</h2>
                    </div>
                    <div className="format">
                        <h2 className="day">THU:</h2>
                        <h2 className="time">12PM - 8PM</h2>
                    </div>
                    <div className="format">
                        <h2 className="day">FRI:</h2>
                        <h2 className="time">10AM - 5PM</h2>
                    </div>
                    <div className="format">
                        <h2 className="day">SAT:</h2>
                        <h2 className="time">Appointment Only</h2>
                    </div>
                    <div className="format">
                        <h2 className="day">SUN:</h2>
                        <h2 className="time">CLOSED</h2>
                    </div>
                </div>
            </div>

            <div className='foot-sect'>
                <EmailIcon className='foot-icon' />
                <div className="foot-text">
                    <h2 className='foot-detail'>Email:</h2>
                    <h2 className='foot-detail'>lilachairstudio@gmail.com</h2>
                </div>
                
            </div>
            <div className='foot-sect'>
                <PhoneAndroidIcon className='foot-icon' />
                <div className="foot-text">
                    <h2 className='foot-detail'>Phone:</h2>
                    <h2 className='foot-detail'>404-553-6423</h2>
                </div>
            </div>
            
        </div>
        
    </footer>
    )
}

export default Footer;