import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovieDetails] = useState([]);

    useEffect(() => {
        async function GetMovieDetails() {
            const data = await fetch(
                'https://movies-app-siit.herokuapp.com/movies/' + id
            ).then((res) => res.json());
            setMovieDetails(data);
            // console.log(data);
        }
        GetMovieDetails();
    }, [id]);

    return (
        <div className='container'>
            <div className='card flex-row flex-wrap bg-dark mt-3'>
                <div className='card-header border-1 m-auto'>
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
                <div className='card-block-div card-block px-4 m-auto text-left text-light'>
                    <h3 className='card-title'>{movie.Title}</h3>
                    <p className='card-text '>Released on: {movie.Released}</p>
                    <p className='card-text '>Actors: {movie.Actors}</p>
                    <p className='card-text'>Awards: {movie.Awards}</p>
                    <p className='card-text'>Genre: {movie.Genre}</p>
                    <p className='card-text'>
                        Rating: {movie.imdbRating}
                        <span> &#9733;</span>
                    </p>
                    <p className='text-center'>
                        <a href={`https://www.imdb.com/title/${movie.imdbID}/`}>
                            See more details on IMBb
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
