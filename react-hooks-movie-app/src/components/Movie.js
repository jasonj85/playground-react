import React from 'react';

import Navigation from './elements/Navigation';
import MovieInfo from './elements/MovieInfo';
import MovieInfoBar from './elements/MovieInfoBar';
import Actor from './elements/Actor';
import Grid from './elements/Grid';
import Spinner from './elements/Spinner';

import { useMovieFetch } from './hooks/useMovieFetch';

const Movie = ({ movieId }) => {

    const [movie, loading, error] = useMovieFetch(movieId);

    if (error) return <div>Error: could not return the movie details :(</div>
    if (loading) return <Spinner />

    return (
        <div>
            <Navigation movie={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar />
            <Grid>
                <Actor />
            </Grid>
        </div>

    )
}
export default Movie;