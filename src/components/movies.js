import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Movies = (props) => {

    const handleButton = (movieIndex, page) => {
        props.handleMovieChange(movieIndex)
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Navigation</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.movies.map((movie, i) => {
                        /**
                         * You will have to modify your buttons in one of two possible ways
                         * in order for your page to be rerouted
                         *
                         * This may be helpful reading: https://tylermcginnis.com/react-router-programmatically-navigate/
                         */
                        return (
                            <tr key={movie.imdbID}>
                                <th>{i + 1}</th>
                                <td>{movie.Title}</td>
                                <td className="d-flex justify-content-around">
                                    {/* change to links below */}
                                    <Link
                                        className="btn btn-info"
                                        to='/people'
                                        onClick={() => handleButton(i, 'people')}>People</Link>
                                    <Link
                                        className="btn btn-primary"
                                        to='/poster'
                                        onClick={() => handleButton(i, 'poster')}>Poster</Link>
                                    <Link
                                        className="btn btn-secondary"
                                        to='/ratings'
                                        onClick={() => handleButton(i, 'ratings')}>Ratings</Link>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

Movies.propTypes = {
    Movies: PropTypes.arrayOf(PropTypes.object),
    selectMovie: PropTypes.func
}

export default Movies;