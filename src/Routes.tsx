import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CounterPage from './pages/counter/Counter';
import AboutPage from './pages/about/AboutPage';

const LocalRoutes: React.FunctionComponent = () => (
    <Routes>
        <Route path="/" element={<CounterPage />} />
        <Route path="/about" element={<AboutPage />} />
    </Routes>
);

export default LocalRoutes;
