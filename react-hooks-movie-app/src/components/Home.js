import React, { useState } from 'react';
import { POPULAR_BASE_URL, SEARCH_BASE_URL, POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

// components
import Grid from './elements/Grid';
import SearchBar from './elements/SearchBar';
import HeroImage from './elements/HeroImage';
import MovieThumb from './elements/MovieThumb';
import LoadMoreButton from './elements/LoadMoreButton';
import Spinner from './elements/Spinner';

// hooks
import { useHomeFetch } from './hooks/useHomeFetch';

import NoImage from './images/no_image.jpg';

const Home = () => {
    const [{ state, loading, error }, fetchMovies] = useHomeFetch();
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = search => {
        const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;

        setSearchTerm(search);
        fetchMovies(endpoint);
    }

    const loadMoreMovies = () => {
        const popularEndPoint = `${POPULAR_BASE_URL}&page=${state.currentPage + 1}`
        const searchEndPoint = `${SEARCH_BASE_URL}${searchTerm}&page=${state.currentPage + 1}`

        const endPoint = searchTerm ? searchEndPoint : popularEndPoint;

        fetchMovies(endPoint);
    }

    if (error) return <div>Oh Uh, something is broken...</div>
    if (!state.movies[0]) return <Spinner />

    return (
        <>
        <SearchBar callback={searchMovies} />
        {!searchTerm && (
            <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
                title={state.heroImage.original_title}
                text={state.heroImage.overview}
            />
        )}
            <Grid header={searchTerm ? 'Search Result...' : 'Popular Movies '}>
                {state.movies.map(movie => (
                    <MovieThumb
                        key={movie.id}
                        clickable
                        image={movie.poster_path ?
                            `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage}
                        movieId={movie.id}
                        movieName={movie.original_title}

                    />


                )
                )}
            </Grid>
            { loading && <Spinner />}
            { state.currentPage < state.totalPages && !loading && (
                <LoadMoreButton text="Load more" callback={loadMoreMovies} />
            )}
        </>

    )

}

export default Home;