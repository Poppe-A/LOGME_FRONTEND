import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: white;
    padding: 20px;
`;

const Content = styled.article`
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: white;
    overflow-y: auto;
    align-items: center;
`;

interface IProps {
    children?: React.ReactElement | React.ReactElement[];
}

const defaultProps: IProps = {
    children: [],
};

const Page: React.FunctionComponent<IProps> = (props: IProps) => (
    <Container>
        <Content>{props.children}</Content>
    </Container>
);

Page.defaultProps = defaultProps;

export default Page;
