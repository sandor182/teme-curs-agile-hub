import React from 'react';
import { Link } from 'react-router-dom';

export default function Movie(props) {
    const { movie } = props;
    return (
        <div>
            <React.Fragment key={movie._id}>
                <div className='card text-center text-light bg-dark mb-4 flex-grow-1'>
                    <img
                        className='card-img-top'
                        src={movie.Poster}
                        alt='movie poster'
                    />
                    <div className='card-body'>
                        <h5 className='card-title'>
                            <Link
                                className='text-light'
                                to={`movies/${movie._id}`}
                            >
                                {movie.Title}
                            </Link>
                        </h5>
                        <h6 className='card-subtitle mb-2 pl-2 text-light'>
                            <span>&#9733;</span>
                            {movie.imdbRating}
                        </h6>
                    </div>
                </div>
            </React.Fragment>
        </div>
    );
}
