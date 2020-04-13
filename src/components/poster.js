import React from 'react';
import PropTypes from 'prop-types';


const Poster = ({ movie }) => {
    return (
        <div className="row">
            <div className="col">
                <div className="row">
                    <div className="col">
                        {/* Header Title */}
                        <h1 className="text-center"><em>{movie.Title}</em></h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                {/* Image Header */}
                                <h2 className="text-center">Movie Poster</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-center">
                                <img src={movie.Poster} alt="Poster" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


Poster.propTypes = {
    movie: PropTypes.object
}

export default Poster;