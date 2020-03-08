import React from 'react'
//imported components
import Header from '../features/header';
import Footer from '../features/footer';
import ServiceCard from '../features/serviceCard';

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
            <div className='underline-header'>
                <h1 className='header'>Services</h1>
                
            </div>
            <div className="service-cards">
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
            </div>
            
        </section>
        <Footer/>
        </>
    )
}

export default Services;