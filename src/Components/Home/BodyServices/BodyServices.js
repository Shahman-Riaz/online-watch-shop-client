import {  faArrowAltCircleRight, faClock, faSurprise, faTruck } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HashLink } from 'react-router-hash-link';
import quickHome from '../../Images/quickHome.jpg'
import oneDay from '../../Images/24hours.png'
import offer from '../../Images/offer.jpg'
import './BodyServices.css'
import { useHistory } from 'react-router-dom';

const BodyServices = () => {
    const history = useHistory()
    const [features , setFeatures] = useState([]);
    const [preloaderVisibility, setPreloaderVisibility] = useState("block");
    
    useEffect(() => {
            fetch('https://localhost.5050/serices')
            .then(res => res.json())
            .then(data => {
                setFeatures(data);
                setPreloaderVisibility("none");
            })
            .catch(err => console.log(err))
    } ,[features.length])
    return (
        <section className="bodyServices-container my-5 p-3 container" id="aboutUs">
                <div className="row">
                        <div className="col-6 m-3">
                                <h1 className='section-headline fs-1'>Why you choose us</h1>
                            <p className="mt-3 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente eaque repellendus asperiores nisi! Architecto, praesentium eligendi consequatur inventore fuga eius totam officia adipisci. Nostrum quia soluta vel distinctio delectus!</p>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-between">
                            <div className="col-lg-4 col-md-4 col-sm-12 service-card p-5">
                                <img className="service-image" src={quickHome} alt="" />
                                <h4 className="text-center"><FontAwesomeIcon style={{color:'#D94167'}} icon={faTruck} /> Quick Home Delivery</h4>
                                <p></p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 service-card p-5">
                                <img className="service-image" src={offer} alt="" />
                                <h4 className="text-center"><FontAwesomeIcon style={{color:'#FFB93F'}} icon={faSurprise} /> Weekly Super Cyclone Offer</h4>
                                <p></p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 service-card p-5">
                                <img className="service-image" src={oneDay} alt="" />
                                <h4 className="text-center"><FontAwesomeIcon style={{color:'#BE0000'}} icon={faClock} /> Delivery in 24 hours</h4>
                                <p></p>
                            </div>
                       </div>
                   <div className="mt-3 text-center">
                   <button className="btn btn-danger" onClick={() => {
                       history.push('/aboutUsMore')
                   }}>More <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
                   </div>
        </section>
    );
};

export default BodyServices;