import React, { useState, useEffect } from 'react';
import Movie from './Movie';

export default function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getMovies() {
            const data = await fetch(
                'https://movies-app-siit.herokuapp.com/movies'
            ).then((res) => res.json());
            setMovies(data.results);
            console.log(data.results);
        }
        getMovies();
    }, []);

    if (!movies.length) {
        return 'Loading ...';
    }

    return (
        <div>
            <h1 className='display-5 text-secondary movies-header'>
                Action Movies
            </h1>
            <div className='container-fluid d-flex flex-wrap justify-content-around'>
                {movies.map(
                    (item) =>
                        movies.indexOf(item) >= 1 && (
                            <Movie movie={item} key={item._id} />
                        )
                )}
            </div>
        </div>
    );
}
