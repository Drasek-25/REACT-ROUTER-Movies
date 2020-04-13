import React from 'react';
import PropTypes from 'prop-types';

const Ratings = ({ movie }) => {
    return (
        <div className="row">
            <div className="col">
                <div className="row">
                    <div className="col">
                        <h1 className='text-center'><em>{movie.Title}</em> Ratings</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Ratings</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    movie.Ratings.map((rating, i) => {
                                        return (
                                            <tr key={i}>
                                                <th>{i + 1}</th>
                                                <td><strong>{rating.Source}: </strong> {rating.Value}</td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
}

Ratings.propTypes = {
    movie: PropTypes.object
}

export default Ratings;