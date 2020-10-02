import styled from 'styled-components';

export const StyledHeader = styled.div`
    background: #1c1c1c;
    padding: 0 20px;
    box-sizing: border-box;

    .header-content {
        max-width: 1280px;
        min-height: 90px;
        padding: 20px 0;
        margin: 0 auto;
        box-sizing: border-box;

        @media screen and (max-width: 500px) {
            min-height: 0px;
        }
    }
`;

export const StyledMovieLogo = styled.img`
    width: 200px;
    margin-top: 10px;
    
    @media screen and (max-width: 500px) {
        width: 150px;
        margin-top: 5px;
        }
`;

export const StyledTMDBLogo = styled.img`
    width: 120px;
    margin-top: 5px;
    float: right;
    
    @media screen and (max-width: 500px) {
        width: 80px;
        margin-top: 0px;
        display: inline-block;
        }
`;