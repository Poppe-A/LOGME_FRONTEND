import React from 'react';
import styled from 'styled-components/macro';

import { colours } from '../constants/colours';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 100px;
    min-height: 100px;
`;

const DotsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-width: 100px;
    min-height: 100px;
`;

const Dot = styled.span`
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: ${colours.secondary};
    margin: 35px 5px;

    &:nth-child(1) {
        animation: bounce 1s ease-in-out infinite;
    }

    &:nth-child(2) {
        animation: bounce 1s ease-in-out 0.1s infinite;
    }

    &:nth-child(3) {
        animation: bounce 1s ease-in-out 0.2s infinite;
    }

    @keyframes bounce {
        0%,
        75%,
        100% {
            -webkit-transform: translateY(0);
            -ms-transform: translateY(0);
            -o-transform: translateY(0);
            transform: translateY(0);
        }

        25% {
            -webkit-transform: translateY(-20px);
            -ms-transform: translateY(-20px);
            -o-transform: translateY(-20px);
            transform: translateY(-20px);
        }
    }
`;

const Text = styled.span``;

interface IProps {
    text?: string;
}

const defaultProps: IProps = {
    text: '',
};

const Loader: React.FunctionComponent<IProps> = (props: IProps) => {
    const textElement = props.text ? <Text>{props.text}</Text> : null;

    return (
        <Container data-testid="loader">
            <DotsContainer>
                <Dot />
                <Dot />
                <Dot />
            </DotsContainer>
            {textElement}
        </Container>
    );
};

Loader.defaultProps = defaultProps;

export default Loader;
