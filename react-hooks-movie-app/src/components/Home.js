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

    return (
        <>
            <HeroImage />
            <SearchBar />
            <Grid />
            <MovieThumb />
            <Spinner />
            <LoadMoreButton />
        </>

    )

}

export default Home;