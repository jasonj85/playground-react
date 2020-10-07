import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

import { StyledLoadMoreBtn } from '../styles/StyledLoadMoreBtn';

const LoadMoreButton = ({text, callback}) => (
    <StyledLoadMoreBtn onClick={callback} type="button">
        {text} <FontAwesome className="fa-search-plus" name="searchMore" />

    </StyledLoadMoreBtn>
)

LoadMoreButton.propTypes ={
    text: PropTypes.string,
    callback: PropTypes.func,
}

export default LoadMoreButton;