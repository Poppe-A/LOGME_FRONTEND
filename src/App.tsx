import React, { Suspense } from 'react';
import styled from 'styled-components';

import Routes from './Routes';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Loader from './components/Loader';

const Layout = styled.div`
    height: 100%;

    /* A 2 rows x 2 columns css grid */
    display: grid;
    grid-template-rows: 50px 1fr;
    grid-template-columns: auto 2fr;
    grid-template-areas:
        'header header'
        'sidebar content';
`;

const App = (): JSX.Element => (
    <Layout>
        <Suspense fallback={<Loader />}>
            <Header />
        </Suspense>
        <Sidebar />
        <Routes />
    </Layout>
);

export default App;
