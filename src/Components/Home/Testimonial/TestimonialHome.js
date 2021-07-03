import React from 'react';
import test1 from '../../Images/testimonial1.png'
import test2 from '../../Images/testimonial2.png'
import test3 from '../../Images/testimonial3.png'
import TestimonialCard from './TestimonialCard';

import './TestimonialHome.css'
const TestimonialHome = () => {
    const patients = [
        {name: "Lin Shek",
        speech: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente eaque repellendus asperiores nisi! Architecto, praesentium eligendi consequatur inventore fuga eius totam officia adipisci.",
    image: test1},
        {name: "Ray Finle",
        speech: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente eaque repellendus asperiores nisi! Architecto, praesentium eligendi consequatur inventore fuga eius totam officia adipisci.",
    image: test2},
        {name: "Hoy Slin",
        speech: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente eaque repellendus asperiores nisi! Architecto, praesentium eligendi consequatur inventore fuga eius totam officia adipisci.",
    image: test3}
    ]
    return (
       <section  id="testimonial" className="testimonial-container py-5">
            <div className="container-fluid text-center">
            <h1 className="stylish-font section-headline fs-1" style={{color:"#414D87"}}>TESTIMONIAL</h1>
            <h3 className="stylish-font mb-5">What Our Patients Say</h3>
            <section className="row d-flex justify-content-around">
                {
                    patients.map(patient => <TestimonialCard patient={patient} />)
                }
            </section>
        </div>
       </section>
    );
};

export default TestimonialHome;