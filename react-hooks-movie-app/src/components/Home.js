import React, { useState, useEffect } from 'react';
import { API_URL, API_KEY, POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

// components
import Grid from './elements/Grid';
import SearchBar from './elements/SearchBar';
import HeroImage from './elements/HeroImage';
import MovieThumb from './elements/MovieThumb';
import LoadMoreButton from './elements/LoadMoreButton';
import Spinner from './elements/Spinner';

// hooks
import { useHomeFetch } from './hooks/useHomeFetch';

const Home = () => {
    const [{ state, loading, error }, fetchMovies] = useHomeFetch();
    console.log(state);

    if (error) return <div>Oh Uh, something is broken...</div>
    if (!state.movies[0]) return <Spinner />

    return (
        <>
            <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
                title={state.heroImage.original_title}
                text={state.heroImage.overview}
            />
            <SearchBar />
            <Grid />
            <MovieThumb />
            <Spinner />
            <LoadMoreButton />
        </>

    )

}

export default Home;