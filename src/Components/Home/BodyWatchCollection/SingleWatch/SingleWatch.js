import { faCartArrowDown, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import watchData from '../../../FakeData/FakeData';

const SingleWatch = (props) => {
    const {watchId} = useParams()
    const singleWatch = (watchData.filter(watch => watch.id == watchId))[0]
    const {id, name, images, type, price, shortDescription, fullDescription} = singleWatch

    const [quantity, setQuantity] = useState(1);
    const [selectedBigImg, setSelectedBigImg] = useState(null)
    const [isSuccess, setIsSuccess] = useState(false);
    // const [preloaderVisibility, setPreloaderVisibility] = useState("block");


    const finalCartHandler = (singleWatch) => {
        singleWatch.quantity = quantity;
        props.cartHandler(singleWatch);
        setIsSuccess(true);
    }
    
    if(isSuccess){
        setTimeout(() => setIsSuccess(false),1500)
    }
    return (
        <div className="food-details my-5 pt-5 container">
        {/* <Preloader visibility={preloaderVisibility}/> */}
        {
        name &&
        
        <div className="row">
            <div className="col-md-6 pr-md-4">
                <h1>{name}</h1>
                <p className="my-5">{fullDescription}</p>
                <div className="d-flex  my-4">
                    <h2 className="price">${price.toFixed(2)}</h2>

                    <div className="cart-controller ml-3 btn">
                        <button className="btn" onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}>-</button> {quantity} <button className="btn" onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>
                </div>
                <div className="action d-flex align-items-center">
                    <button className="btn btn-danger btn-rounded mb-2" onClick={() => finalCartHandler(singleWatch)}><FontAwesomeIcon icon={faCartArrowDown} /> Add</button>
                    {isSuccess &&
                     <p className="ml-3 success-mgs text-success"><FontAwesomeIcon icon={faCheckCircle} />  Item added to Cart</p>
                     
                    }
                </div>

                <div className="more-images mt-5 ">
                    {images.map((img ,index) => <img onClick={() => setSelectedBigImg(images[index])} className={images[index] === selectedBigImg ? "mr-4 small-img active-small-img" : "mr-4 small-img"} height="150px" src={img} alt=""/>)}
                </div>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" src={selectedBigImg} alt=""/>
            </div>

        </div>
        }
    </div>
    );
};

export default SingleWatch;