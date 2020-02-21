import React from 'react'

//design assets
import RoomIcon from '@material-ui/icons/Room';
// import MapIcon from '@material-ui/icons/Map';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer  = () => {
    return (
    <footer>
        <div className="foot-wrap">
            <div className='foot-sect'>
                <RoomIcon className='foot-icon' />
                <div className="foot-text">
                    <h2 className="foot-detail">2531 Piedmont Rd NE STE 100</h2>
                    <h2 className="foot-detail">Suite 113</h2>
                    <h2 className="foot-detail">Atlanta, GA 30324</h2>
                    <h2 className="foot-detail">Find on map</h2>
                </div>
                
            </div>
            <div className='foot-sect'>
                <WatchLaterIcon className='foot-icon' />
                <div className="foot-text">
                    <h2 className="foot-detail">Salon Hours:</h2>
                    <h2 className="foot-detail">MON - FRI: 00:00XX - 00:00XX</h2>
                    <h2 className="foot-detail">SAT - SUN 00:00XX - 00:00XX</h2>
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
            <div className='foot-sect foot-social-sect'>
                <a href="#">
                    <i className="foot-social fab fa-facebook-square"></i>
                </a>
                <a href="#">
                    <i className="foot-social fab fa-instagram"></i>
                </a>
                <a href="#">
                    <i className="foot-social fab fa-yelp"></i>
                </a>
                
                
                
            </div>
        </div>
        
    </footer>
    )
}

export default Footer;