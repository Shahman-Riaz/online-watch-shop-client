import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import BodyServices from '../BodyServices/BodyServices';
import './Header.css'


const Header = () => {
    const searchWatches = useHistory()
    const [searchQuery , setSearchQuery] = useState(null)
    const getQuery = e => setSearchQuery(e.target.value);
    return (
        <section className="header" id="navbar">
            <div className="search-box col-6 my-5 mx-auto">
                    <input id="query" onChange={getQuery} type="text" className="form-control" placeholder="Search your favorite brand" />
                    <Link to={"/search="+searchQuery}>
                        <button onClick={() => searchWatches.push('/searchedWatches')} className="btn btn-light search-btn">Search</button>
                    </Link>
            </div>
        </section>
    );
};

export default Header;