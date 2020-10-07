import React from 'react';
import PropTypes from 'prop-types';

import { StyledHeroImage } from '../styles/StyledHeroImage';

const HeroImage = ({ image, title, text }) => (
    <StyledHeroImage image={image}>
        <div className="heroimage-content">
            <div className="heroimage-text">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    </StyledHeroImage>
)

HeroImage.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
}

export default HeroImage;