import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';

import './i18n';

// CSS reset
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/assets.css';
import 'sanitize.css/typography.css';
import 'sanitize.css/reduce-motion.css';

const GlobalStyle = createGlobalStyle`
    html, #root {
        height: 100%;
        background-color: 'white';
    }

    body {
        height: 100%;
        margin: 0;
        font-family: 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

ReactDOM.render(
    <HelmetProvider>
        <React.StrictMode>
            <Provider store={store}>
                <>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                    <GlobalStyle />
                </>
            </Provider>
        </React.StrictMode>
    </HelmetProvider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// eslint-disable-next-line @typescript-eslint/no-floating-promises -- Ignore promise return of service worker
serviceWorker.unregister();
