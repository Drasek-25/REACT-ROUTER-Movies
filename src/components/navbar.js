import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <div className='row'>
            <Link
                className="btn btn-success"
                to='/'
            >Movies</Link>
            <Link
                className="btn btn-info"
                to='/people'
            >People</Link>
            <Link
                className="btn btn-primary"
                to='/poster'
            >Poster</Link>
            <Link
                className="btn btn-secondary"
                to='/ratings'
            >Ratings</Link>
        </div>
    )
}
export default Navbar;