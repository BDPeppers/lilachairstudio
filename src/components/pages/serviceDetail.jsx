import React from 'react';
//imported components
import Header from '../features/header';
import Footer from '../features/footer';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';

const ServiceDetail = (props) =>{
//redux to map service card to service page
console.log(props)
    return(
        <>
            <Header/>
            <section>
                <div className="content-box ">
                    <h1 className="content content-header service-header">{props.info.name}</h1>
                </div>

                <div className='aboutPage-img-box service-img-box'>
                    <img className='content-img salon' src={props.info.img} alt={props.info.name}/>
                </div>
                <div className="content-box about-box service-box">
                    <p className="content">
                        Service Description -  Lorem Ipsum has been the industry's standard for dummy text.
                        Adding extra text here to test what large amounts of text would
                        look like on a variety screens of different sizes. 
                    </p>
                    <p className="content">{props.info.price} | {props.info.time}</p>
                   
                </div>
                <div className="btn-box service-btn">
                    <Button className='book-btn-full' variant="contained" color="primary" href='https://kristinmealor.glossgenius.com/'>
                        Book An Appointment
                    </Button>
                </div>
            </section>
            <Footer/>
        </>
        
    );
}
const mapStateToProps = (state) =>{
    return(state)
  }

export default connect(mapStateToProps)(ServiceDetail);