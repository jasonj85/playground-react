import React from 'react';

import movieLogo from '../images/reactMovie_logo.png';
import TMDBLogo from '../images/tmdb_logo.svg';

import {StyledTMDBLogo, StyledHeader, StyledMovieLogo} from '../styles/StyledHeader';

const Header = () => (

    <StyledHeader>
        <div className="header-content">
            <StyledMovieLogo src={movieLogo} alt="React Movies Logo" />
            <StyledTMDBLogo src={TMDBLogo} alt="TMDB Logo" />

        </div>
    </StyledHeader>
)
export default Header;