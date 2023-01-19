import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';

const Container = styled.section`
    display: flex;
    flex: 1;
    background-color: white;
    justify-content: center;
    align-items: center;
`;

const AboutPage: React.FunctionComponent = () => (
    <>
        <Helmet>
            <title>About!!!!</title>
        </Helmet>
        <Container data-testid="about_page">
            <span>This is the about page. Its one of the best pages!</span>
        </Container>
    </>
);

export default AboutPage;
