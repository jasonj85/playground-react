import React from 'react';
import FontAwesome from 'react-fontawesome';

import { StyledLoadMoreBtn } from '../styles/StyledLoadMoreBtn';

const LoadMoreButton = ({text, callback}) => (
    <StyledLoadMoreBtn onClick={callback} type="button">
        {text} <FontAwesome className="fa-search-plus" name="searchMore" />

    </StyledLoadMoreBtn>
)

export default LoadMoreButton;