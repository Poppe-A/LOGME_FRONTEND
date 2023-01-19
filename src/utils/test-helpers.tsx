import thunk from 'redux-thunk';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';

import { initialState as counterInitialState } from '../slices/counterSlice';

const mockStore = configureStore([thunk]);

export const rootInitialState = {
    counter: counterInitialState,
};

export const renderWithRedux = (
    ui: JSX.Element,
    initialState: Record<string, unknown> = rootInitialState,
) => {
    const store = mockStore(initialState);
    return {
        ...render(<Provider store={store}>{ui}</Provider>),
        mockStore: store,
    };
};

export const renderWithHelmet = (ui: JSX.Element) => <HelmetProvider>{ui}</HelmetProvider>;
