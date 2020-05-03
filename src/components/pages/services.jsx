import React from 'react'
//imported components
import Header from '../features/header';
import Footer from '../features/footer';
import ServiceCard from '../features/serviceCard';
import Button from '@material-ui/core/Button';

//design assets
import Consultaion from '../../imgs/services/consultation.jpg'
import Blowout from '../../imgs/services/blowout.jpg'
import Detailing from '../../imgs/services/Detailing.jpg'
import Haircut from '../../imgs/services/haircut.jpg'
import fullHighlight from '../../imgs/services/fullHighlight.jpg'
import Partial from '../../imgs/services/Partial.jpg'
import Treatment from '../../imgs/services/Treatment.jpg'
import Root from '../../imgs/services/root.jpg'
import Balayage from '../../imgs/services/balayage.jpg'
import Care from '../../imgs/services/care.jpg'

const Services = () => {
    return (
        <>
        <Header/>
        <section>
            <div className="content-box content-header-box">
                <h2 className='content'>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod."
                </h2>
            </div>
            {/* <div className='underline-header'>
                <h1 className='header'>Services</h1>
            </div> */}

            <div className="section-divider"></div>

            <div className="service-box sbox1">

                <div className="service">
                    <h2 className="service-name">Consultation</h2>
                    <p className="service-desc">
                        Wanting a new look, style, or a bit of color?
                        Let's start from the beginning and discuss the
                        best way to get you there.
                    </p>
                    <div className="price-time">
                        <p className="service-time">Time: 15 min</p>
                        <p className="service-price">Price: Free</p>
                    </div>
                </div>

                <br/>
                <div className="service-divider"></div>
                <br/>

                <div className="service">
                    <h2 className="service-name">Detailing</h2>
                    <div className="price-time">
                        <p className="service-time">Time: 15 min</p>
                        <p className="service-price">Price: Varies</p>
                    </div>
                </div>


            </div>

            <div className="section-divider"></div>

            <div className="service-box sbox2">
                <div className="service">
                    <h2 className="service-name">Women's Haircut</h2>
                    <div className="price-time">
                        <p className="service-time">Time: 45 min</p>
                        <p className="service-price">Price: $65</p>
                    </div>
                </div>

                <br/>
                <div className="service-divider"></div>
                <br/>

                <div className="service">
                    <h2 className="service-name">Men's Haircut</h2>
                    <div className="price-time">
                        <p className="service-time">Time: 45 min</p>
                        <p className="service-price">Price: $55</p>
                    </div>
                </div>

                <br/>
                <div className="service-divider"></div>
                <br/>

                <div className="service">
                    <h2 className="service-name">5 for $25</h2>
                    <div className="price-time">
                        <p className="service-time">Time: 15 min</p>
                        <p className="service-price">Price: $25</p>
                    </div>
                </div>

            </div>

            <div className="section-divider"></div>

            <div className="service-box sbox3">

                <div className="service">
                    <h2 className="service-name">Full Highlight</h2>
                    <p className="service-desc">Something</p>
                    <div className="price-time">
                        <p className="service-time">Time: 2hr 30min</p>
                        <p className="service-price">Price: $155</p>
                    </div>
                    <p className="desc">Additional $65 for haircut ($225)</p>
                </div>

                <br/>
                <div className="service-divider"></div>
                <br/>

                <div className="service">
                    <h2 className="service-name">Partial Highlight</h2>
                    <p className="service-desc">Complimentary clean up</p>
                    <div className="price-time">
                        <p className="service-time">Time: 2hr 30min</p>
                        <p className="service-price">Price: $125</p>
                    </div>
                    <p className="desc">Additional $65 for haircut ($190)</p>
                </div>
            </div>

            <div className="section-divider"></div>

            <div className="service-box sbox4">

                <div className="service">
                    <h2 className="service-name">Shampoo & Blowout</h2>
                    <div className="price-time">
                        <p className="service-time">Time: 45 min</p>
                        <p className="service-price">Price: $45</p>
                    </div>
                </div>
                
                <br/>
                <div className="service-divider"></div>
                <br/>

                <div className="service">
                    <h2 className="service-name">Chem Shot Treatment</h2>
                    <div className="price-time">
                        <p className="service-time">Time: 15 min</p>
                        <p className="service-price">Price: $25</p>
                    </div>
                </div>

                <br/>
                <div className="service-divider"></div>
                <br/>

                <div className="service">
                    <h2 className="service-name">Conditioning Gloss</h2>
                    <div className="price-time">
                        <p className="service-time">Time: 45 min</p>
                        <p className="service-price">Price: $35</p>
                    </div>
                </div>

                <br/>
                <div className="service-divider"></div>
                <br/>

                <div className="service">
                    <h2 className="service-name">Single Color Root Touch Up</h2>
                    <div className="price-time">
                        <p className="service-time">Time: 2 hr 15 min</p>
                        <p className="service-price">Price: $85</p>
                    </div>
                
                </div>               

            </div>

            <div className="section-divider"></div>

            <div className="service-box sbox5">
            <div className="service">
                    <h2 className="service-name">Full Balayage</h2>
                    <div className="price-time">
                        <p className="service-time">Time: 2 hr 15 min</p>
                        <p className="service-price">Price: $175</p>
                    </div>
                    <p className="desc">Additional $65 for haircut ($240)</p>
                </div>

                <br/>
                <div className="service-divider"></div>
                <br/>

                <div className="service">
                    <h2 className="service-name">Keratin Express</h2>
                    <div className="price-time">
                        <p className="service-time">Time: 1 hr 30 min</p>
                        <p className="service-price">Price: $150</p>
                    </div>
                </div>

                <br/>
                <div className="service-divider"></div>
                <br/>

                <div className="service">
                    <h2 className="service-name">Keratin Full</h2>
                    <div className="price-time">
                        <p className="service-time">Time: 3 hr</p>
                        <p className="service-price">Price: $300</p>
                    </div>
                </div>
            </div>


            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div className="service-btn-box">
                <Button className='service-btn' variant="contained" color="primary" href='https://kristinmealor.glossgenius.com/'>
                    Book Now
                </Button>
            </div>
            


            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            {/* <div className="service-cards">
                <ServiceCard imgProp={Consultaion} serviceProp="Consultation" timeProp='15 min' priceProp='Free'/>
                <ServiceCard imgProp={Detailing} serviceProp="Detailing" timeProp='15 min' priceProp='varies'/>

                <ServiceCard imgProp={Haircut} serviceProp="Women's Haircut" timeProp='45 min' priceProp='$65'/>
                <ServiceCard imgProp={Haircut} serviceProp="Men's Haircut" timeProp='45 min' priceProp='$55'/>

                <ServiceCard imgProp={Blowout} serviceProp="Shampoo & Blowout" timeProp='45 min' priceProp='$45'/>
                <ServiceCard imgProp={Blowout} serviceProp="5 for $25" timeProp='15 min' priceProp='$25'/>  

                <ServiceCard imgProp={Care} serviceProp="Chem Shot Treatment" timeProp='15 min' priceProp='$25'/>
                <ServiceCard imgProp={Care} serviceProp="Conditioning Gloss" timeProp='45 min' priceProp='$35'/>

                <ServiceCard imgProp={Root} serviceProp="Single Color Root Touch-Up" timeProp='2 hr 15 min' priceProp='$85'/>
                <ServiceCard imgProp={Root} serviceProp="Single Process & Haircut" timeProp='2 hr 15min' priceProp='$150'/>

                <ServiceCard imgProp={fullHighlight} serviceProp="Full Highlight" timeProp='2 hr 30 min' priceProp='$155'/>
                <ServiceCard imgProp={fullHighlight} serviceProp="Full Highlight & Haircut" timeProp='2 hr 45 min' priceProp='$220'/>

                <ServiceCard imgProp={Partial} serviceProp="Partial Highlights" timeProp='2 hr 30 min' priceProp='$125'/>
                <ServiceCard imgProp={Partial} serviceProp="Partial Highlights & Haircut" timeProp='2 hr 35 min' priceProp='$190'/>

                <ServiceCard imgProp={Balayage} serviceProp="Full Balayage" timeProp='2 hr 15 min' priceProp='$175'/>
                <ServiceCard imgProp={Balayage} serviceProp="Full Balayage & Haircut" timeProp='3 hr' priceProp='$240'/>

                <ServiceCard imgProp={Treatment} serviceProp="Keratin Express" timeProp='1 hr 30 min' priceProp='$150'/>
                <ServiceCard imgProp={Treatment} serviceProp="Keratin Full" timeProp='3 hr' priceProp='$300'/>
            </div> */}
            
        </section>
        <Footer/>
        </>
    )
}

export default Services;