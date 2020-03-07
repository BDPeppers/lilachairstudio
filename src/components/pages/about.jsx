import React from 'react'
//imported components
import Header from '../features/header';
import Footer from '../features/footer';
import MapBox from '../features/mapbox';
//design assets
import MVP from '../../imgs/MVP.PNG';
import space1 from '../../imgs/space1.PNG';
import space2 from '../../imgs/space2.PNG';
import space3 from '../../imgs/space3.PNG';

const About = () => {
    return (
    <>
    <Header/>
    <section>
        <div className="content-box">
            <h1 className="mvp">Kristin Mealor</h1>
            <p className="content">Owner / Colorist / Stylist</p>
        </div>
        <div className='landing-img-box aboutPage-img-box'>
            <img className="lazyload" src={MVP} alt="Kristin Mealor"/>
        </div>
        <div className='content-box quote-box'>
            <p className='content'>
                "There's not a day that goes by that I'm not thankful thatI've found my passion
                and calling in life. I wouldn't do anything else."
            </p>
            <p className='mvp'>- Kristin Mealor</p>
        </div>

        <div className="content-box about-box">
            <h1 className="content">Specialities</h1>
            <p className="content">
                Creative Color / Balayage / Corrective Color / Vivid Color /
                Blondes / Keratin / Razor Cuts / Styling
            </p>
           
        </div>

        <div className="content-box about-box">
            <h1 className="content">
                Bio
            </h1>
            <p className="content">
                A Georgia native, Kristin spent her early years on the West Coast - San Francisco and Reno - before
                returning home to the Atlanta metro area. With over 20 years of professional experience, Kristin has
                been trained by the best in the business: Van Michaels Salon, Aveda, Bumble and Bumble, Oribe, Davines
                and Redken Exchange. In short, she really knows her stuff!
            </p>
            <p className="content">
                Kristin is known for her enthusiastic and unwavering commitment to her clients, but her specialty is "creative color".
                Kristin's clients rave about her color mastery, delivering bayalage, corrective color, vivid color, gorgeous blondes,
                and grey coverage that are second-to-none! She is also a chemical specialist and offers keratin and keratin express blowouts.
            </p>
        </div>
        <div className="content-box about-box">
            <h1 className="content">
                Where Tranquility Meets Passion
            </h1>
            <p className="content">
                Kristin is passionate about her craft and loves the instant gratification of being able to have a positive impact
                on her client's lives. Her clients soon become family, and each day they and trust in her to make them beautiful and
                empowered. Kristin creates amazing hair styles that last and educates her clients on how to best care for their hair 
                to extend the life of their cuts and colors. Her loyalty referral program keeps clients happy and coming back year after year.
                Caring and compassionate, Kristin values delivering the highest quality work and in a positive, welcoming environment.
            </p>
            <p className='content'>
                Kristin lives in Decatur where her favorite role is being a Mom to two active teenage boys. When not at the salon, she can be 
                found cheering on her boys the baseball and football fields, cooking, listening to good music, traveling, or planning her next 
                adventure.
            </p>
            <p className='content'>
                "My vision for Lilac Hair Sutdio is to provide high quality hair care couple with the latest techniques and incredible
                products in a relaxing, tranquil environment. Life is so crazy - Lilac is an opportunity for clients to escape, unwind, 
                reenergize, and refresh."
            </p>
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
                Lorem ipsum is placeholder text commonly used in the
                graphic, print, and publishing industries for previewing
                layouts and visual mockups.
            </p>
        </div>

        <MapBox/>

    </section>
    <Footer/>
    </>
    )
}

export default About;