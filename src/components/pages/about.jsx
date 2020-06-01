import React from 'react'
//imported components
import Header from '../features/header';
import Footer from '../features/footer';

//design assets
import MVP from '../../imgs/MVP.PNG';


const About = () => {
    return (
    <>
    <Header/>
    <section className="about">

        <div className="about-landing">
            <div className="mvp-box">
                <div className="k-box">
                    <div className="img-box">
                        <img src={MVP} alt="Atlanta Hair Stylist, Hair Colorist, Salon Owner - Kristin Mealor" srcset=""/>
                    </div>
                    <div className="titles">
                        <h1 className="mvp-detail">Owner</h1>
                        <h1 className="mvp-detail center">Stylist</h1>
                        <h1 className="mvp-detail">Colorist</h1>
                    </div>
                </div>
            </div>
        
            <div className="kristin-box">
                <h1 className="km">Kristin Mealor</h1>
                <h2 className="km-skills">Specialities</h2>
                <p className="skills">
                    Creative Color / Balayage / Corrective Color / Vivid Color /
                    Blondes / Keratin / Razor Cuts / Styling
                </p>
                <p className='quote'>
                    "There's not a day that goes by that I'm not thankful thatI've found my passion
                    and calling in life. I wouldn't do anything else."
                </p>
            </div>
        </div>

        <div className="content-box about-box">
            <h1 className="content">
                Bio
            </h1>
            <p className="content">
                A Georgia native, Kristin spent her early years on the West Coast - San Francisco and Reno - before returning home to the 
                Atlanta metro area. With over 20 years of professional experience, Kristin has been trained by the best in the business: 
                Van Michaels Salon, Aveda, Bumble and Bumble, Oribe, Davines, and Redken Exchange. In short, she really knows her stuff!
            </p>
            <p className="content">
                Kristin is known for her enthusiastic and unwavering commitment to her clients, but her specialty is "creative color." 
                Kristin's clients rave about her color mastery, delivering bayalage, corrective color, vivid color, gorgeous blondes, 
                and grey coverage that are second-to-none! She is also a chemical specialist and offers keratin and keratin express blowouts.
            </p>
        </div>
        <div className="content-box about-box about-bottom">
            <h1 className="content">
                Where Tranquility Meets Passion
            </h1>
            <p className="content">
                Kristin is passionate about her craft and loves the instant gratification of being able to have a positive impact on her client's lives. 
                Her clients soon become family, and each day they and trust in her to make them beautiful and empowered. Kristin creates fantastic 
                hairstyles that last and educates her clients on how to best care for their hair to extend the life of their cuts and colors. Her loyalty 
                referral program keeps clients happy and coming back year after year. Caring and compassionate, Kristin values delivering the highest quality 
                work and in a positive, welcoming environment.
            </p>
            <p className='content'>
                Kristin lives in Decatur, where her favorite role is being a Mom to two active teenage boys. When not at the salon, she can be found cheering on 
                her boys the baseball and football fields, cooking, listening to good music, traveling, or planning her next adventure.
            </p>
            <p className='content'>
                "My vision for Lilac Hair Studio is to provide high-quality hair care coupled with the latest techniques and incredible products in a relaxing, 
                tranquil environment. Life is so crazy - Lilac is an opportunity for clients to escape, unwind, reenergize, and refresh."
            </p>
        </div>

    </section>
    <Footer/>
    </>
    )
}

export default About;