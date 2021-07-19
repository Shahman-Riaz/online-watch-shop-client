import React, { useState } from 'react';
import watchData from '../../FakeData/FakeData';
import './BodyWatchCollection.css'
import {Link} from 'react-router-dom';
import WatchCollectionItem from './WatchCollectionItem/WatchCollectionItem';
import Preloader from '../../Preloader/Preloader';

const BodyWatchCollection = (props) => {
    const [watches, setWatches] = useState(watchData)
    const [selectedWatchesType, setSelectedWatchesType] = useState('Rolex')
    const [preloaderVisibility, setPreloaderVisibility] = useState("block");
    const selectedWatches = watches.filter(watch => watch.type === selectedWatchesType)
    return (
        <main className="watch-area my-5" id="allWatches">
            <h1 className="text-center section-headline stylish-font fs-1">Best Watch Collection</h1>
            <div className="container">
                <nav>
                    <ul className="nav justify-content-center">
                        <li onClick={() => setSelectedWatchesType("Rolex")} className="nav-item watch-type">
                            <span  to="rolex" className={selectedWatchesType === "Rolex" ?  "active nav-link" : "nav-link"}>ROLEX</span>
                        </li>
                        <li onClick={() => setSelectedWatchesType("Tudor")} className="nav-item watch-type">
                            <span to="rolex" className={selectedWatchesType === "Tudor" ?  "active nav-link" : "nav-link"}>TUDOR</span>
                        </li>
                        <li onClick={() => setSelectedWatchesType("VacheronConstatin")} className="nav-item watch-type">
                            <span to="rolex" className={selectedWatchesType === "VacheronConstatin" ?  "active nav-link" : "nav-link"}>VACHERON CONSTATIN</span>
                        </li>
                        <li onClick={() => setSelectedWatchesType("Breitling")} className="nav-item watch-type">
                            <span to="rolex" className={selectedWatchesType === "Breitling" ?  "active nav-link" : "nav-link"}>BREITLING</span>
                        </li>
                    </ul>
                </nav>

                <div className="row my-5">
                    {/* <Preloader  visibility={preloaderVisibility}/> */}
                    {
                        selectedWatches.map(watch => <WatchCollectionItem key={watch.id}  watch={watch} />)
                    }
                </div>
                <div className="text-center">
                    {/* {
                        props.cart.length ? 
                        <Link to="/checkout">
                            <button  className="btn btn-danger btn-secondary">Check Out Your Watch</button>
                        </Link>
                        :
                        <button disabled className="btn btn-secondary">Check Out Your Watch</button>

                    } */}

                </div>
            </div>
        </main>
    );
};

export default BodyWatchCollection;