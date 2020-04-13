import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const People = ({ movie }) => {
    let i = 0;

    const getCast = movie => {
        const arrActors = movie.Actors.split(", ");
        return (
            arrActors.map(actor => {
                i += 1;
                return (
                    <tr key={i}>
                        <th>{i}</th>
                        <td><strong>Actor: </strong> {actor}</td>
                    </tr>
                )
            })
        )
    }

    const getDirector = movie => {
        i += 1;
        return (
            <tr key={i}>
                <th>{i}</th>
                <td><strong>Director: </strong> {movie.Director}</td>
            </tr>
        )
    }

    const getWriter = movie => {
        const arrWriters = movie.Writer.split(", ");
        return (
            arrWriters.map(writer => {
                i += 1;
                return (
                    <tr key={i}>
                        <th>{i}</th>
                        <td><strong>Writer: </strong> {writer}</td>
                    </tr>
                )
            })
        )
    }

    return (
        <div className="row">
            <div className="col">
                <div className="row">
                    <div className="col">
                        <h1 className='text-center'><em>{movie.Title}</em> Cast and Crew</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>People</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    <Fragment>
                                        {getCast(movie)}
                                        {getDirector(movie)}
                                        {getWriter(movie)}
                                    </Fragment>
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
}

People.propTypes = {
    movie: PropTypes.object
}

export default People;