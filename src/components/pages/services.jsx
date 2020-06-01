import React from 'react'
//imported components
import Header from '../features/header';
import Footer from '../features/footer';
import Button from '@material-ui/core/Button';



const Services = () => {
    return (
        <>
        <Header/>
        <section>
            <div className="content-box content-header-box service-content-box">
                <h2 className='content service-content'>
                    Lilac Hair Studio guarantees professional skill, Atlanta's best hair salon customer service, 
                    the highest quality products, and a welcoming environment for EVERYONE. Meeting all your of 
                    hair care needs, our services include hair coloring, cuts, blowouts, chemical services 
                    such as keratin smoothing treatments, and conditioning treatments. We welcome hair services for
                    women, men, and children of all textures.
                </h2>
            </div>

            <br/>
            <div className="section-divider"></div>
            <br/>

            <div className="service-box sbox1">

                <div className="service">
                    <h2 className="service-name">Consultation</h2>
                    <p className="service-desc">
                        Do you want a new look, style, or a bit of color?
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
                    <p className="desc">This is a complimentary clean up for men or women.</p>
                    <div className="price-time">
                        <p className="service-time">Time: 15 min</p>
                        <p className="service-price">Price: Varies</p>
                    </div>
                </div>


            </div>

            <br/>
            <div className="section-divider"></div>
            <br/>

            <div className="service-box sbox2">
                <div className="service">
                    <h2 className="service-name">Women's Haircut</h2>
                    <div className="price-time">
                        <p className="service-time">Time: 45 min</p>
                        <p className="service-price">Price: $70</p>
                    </div>
                </div>

                <br/>
                <div className="service-divider"></div>
                <br/>

                <div className="service">
                    <h2 className="service-name">Men's Haircut</h2>
                    <div className="price-time">
                        <p className="service-time">Time: 45 min</p>
                        <p className="service-price">Price: $60</p>
                    </div>
                </div>

                <br/>
                <div className="service-divider"></div>
                <br/>

                <div className="service">
                    <h2 className="service-name">Child's Haircut</h2>
                    <div className="price-time">
                        <p className="service-time">Time: 30 min</p>
                        <p className="service-price">Price: $35</p>
                    </div>
                </div>

                <br/>
                <div className="service-divider"></div>
                <br/>

                <div className="service">
                    <h2 className="service-name">5 for $25</h2>
                    <p className="service-desc">5-8 highligts for an add on service only.</p>
                    <div className="price-time">
                        <p className="service-time">Time: 15 min</p>
                        <p className="service-price">Price: $25</p>
                    </div>
                </div>

            </div>

            <br/>
            <div className="section-divider"></div>
            <br/>

            <div className="service-box sbox3">

                <div className="service">
                    <h2 className="service-name">Full Highlight</h2>
                    <p className="service-desc">
                        Full head of highlights with a haircut. A gloss is an 
                        additional service with an additional fee.
                    </p>
                    <div className="price-time">
                        <p className="service-time">Time: 2hr 30min</p>
                        <p className="service-price">Price: $165</p>
                    </div>
                    <p className="desc">Additional haircut price: ($220)</p>
                </div>

                <br/>
                <div className="service-divider"></div>
                <br/>

                <div className="service">
                    <h2 className="service-name">Partial Highlight</h2>
                    <p className="service-desc">Partial highlight only... gloss charged seperately.</p>
                    <div className="price-time">
                        <p className="service-time">Time: 2hr 30min</p>
                        <p className="service-price">Price: $130</p>
                    </div>
                    <p className="desc">Additional haircut price: ($215)</p>
                </div>
            </div>

            <br/>
            <div className="section-divider"></div>
            <br/>

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
                    <p className="service-desc">
                        This is a conditioning toner gloss. 
                        It adds color and immense shine to your already beautiful hair.
                    </p>
                    <div className="price-time">
                        <p className="service-time">Time: 30 min</p>
                        <p className="service-price">Price: $35</p>
                    </div>
                </div>

                <br/>
                <div className="service-divider"></div>
                <br/>

                <div className="service">
                    <h2 className="service-name">Single Color Root Touch Up</h2>
                    <p className="service-desc">This is a root touch up only.</p>
                    <div className="price-time">
                        <p className="service-time">Time: 2 hr</p>
                        <p className="service-price">Price: Varies</p>
                    </div>
                
                </div>               

            </div>

            <div className="section-divider"></div>

            <div className="service-box sbox5">
            <div className="service">
                    <h2 className="service-name">Full Balayage</h2>
                    <p className="service-desc">
                        French freehand hair coloring technique for natural looking colour.
                    </p>
                    <div className="price-time">
                        <p className="service-time">Time: 2 hr 15 min</p>
                        <p className="service-price">Starting Price: $180</p>
                    </div>
                    <p className="desc">Additional haircut price: ($240)</p>
                </div>

                <br/>
                <div className="service-divider"></div>
                <br/>

                <div className="service">
                    <h2 className="service-name">Keratin Express</h2>
                    <p className="service-desc">
                        This is the keratin express blowout.
                    </p>
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
                    <p className="service-desc">
                        This is the full strength keratin.
                    </p>
                    <div className="price-time">
                        <p className="service-time">Time: 3 hr</p>
                        <p className="service-price">Price: $300</p>
                    </div>
                </div>
            </div>


            <div className="content-box ">
               <h1 className="content content-header">Products</h1>
               <p className='content caption'>
                   We use Davine's  Sustainable hair care products, made from all natural ingredients and manufactured using only renewable energy.
               </p>
               <a className="content-link" href="http://https://us.davines.com/">https://us.davines.com/</a>
           </div>

            <div className="service-btn-box">
                <Button className='service-btn' variant="contained" color="primary" href='https://kristinmealor.glossgenius.com/services'>
                    Book Now
                </Button>
            </div>
            

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