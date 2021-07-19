import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import watchData from '../../../FakeData/FakeData';
import WatchCollectionItem from '../WatchCollectionItem/WatchCollectionItem';

const WatchByBrand = () => {
    const {brandName} = useParams()
    const selectedBrand = watchData.filter(watch => watch.type === brandName)

    return (
        <main className="watch-area my-5" id="allWatches">
            <h1 className="text-center section-headline stylish-font fs-1">{brandName}</h1>
            <div className="container">

                <div className="row my-5">
                    {/* <Preloader  visibility={preloaderVisibility}/> */}
                    {
                        selectedBrand.map(watch => <WatchCollectionItem key={watch.id}  watch={watch} />)
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

export default WatchByBrand;