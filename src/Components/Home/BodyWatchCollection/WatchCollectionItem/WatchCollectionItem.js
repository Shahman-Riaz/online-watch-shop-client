import React from 'react';
import { Link } from 'react-router-dom';
import './WatchCollectionItem.css'

const WatchCollectionItem = (props) => {
    const {id,name,shortDescription,price,images, type} = props.watch;
    return (
        <div className="col-md-4 mb-4 watchCard-container">
        <Link to={"/watch/"+id} className="watch-cardLink">
            <div className="card text-center">
            <div className="brand-name"><button className="text-left">{type}</button></div>
                <img  src={images[0]} alt="" className="card-img"/>
                <div className="card-body watch-cardLink">
                    <h5 className="watch-cardLink">{name}</h5>
                    <p>{shortDescription}</p>
                    <h4>${price.toFixed(2)}</h4>
                   
                </div>
            </div>
        </Link>
    </div>
    );
};

export default WatchCollectionItem;