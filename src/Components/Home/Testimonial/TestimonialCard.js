import React from 'react';
import './TestimonialCard.css'
import Card from 'react-animated-3d-card'


const TestimonialCard = ({ patient }) => {
    const { name, speech, image } = patient;
    return (
        <div className="col-lg-4 text-center test-card col-md-4">
            <Card>
              <img src={image} alt="" />
                  <h4 className="mt-1">{name}</h4>
                  <p className="patient-speech px-2"><span className="fs-3"> &#8220;</span>{speech}<span className="fs-3"> &#8220;</span></p>
          </Card>
        </div>

        
    );
};

export default TestimonialCard;