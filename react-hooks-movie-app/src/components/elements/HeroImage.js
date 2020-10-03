import React from 'react';

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
export default HeroImage;