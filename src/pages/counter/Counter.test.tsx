/* eslint-disable @typescript-eslint/no-unsafe-member-access -- Because we are accessing so many unsafe members */
import axios from 'axios';
import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';

import { increment, decrement, fetchInitial } from '../../slices/counterSlice';
import { renderWithRedux, rootInitialState, renderWithHelmet } from '../../utils/test-helpers';
import Counter from './Counter';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('<Counter />', () => {
    beforeEach(() => {
        mockedAxios.get.mockReset();
    });

    it('shows zero as initial value', () => {
        renderWithRedux(renderWithHelmet(<Counter />));
        expect(screen.getByText('0')).toBeVisible();
    });

    it('shows loading message', () => {
        renderWithRedux(renderWithHelmet(<Counter />), {
            ...rootInitialState,
            counter: { ...rootInitialState.counter, loading: true },
        });
        expect(screen.getByText(/loading/i)).toBeVisible();
    });

    it('shows error message', () => {
        const errorMessage = 'An error occurred';
        renderWithRedux(renderWithHelmet(<Counter />), {
            ...rootInitialState,
            counter: { ...rootInitialState.counter, error: errorMessage },
        });
        expect(screen.getByText(errorMessage)).toBeVisible();
    });

    it('calls increment on click', () => {
        const { mockStore } = renderWithRedux(renderWithHelmet(<Counter />));
        fireEvent.click(screen.getByText('Increment'));
        expect(mockStore.getActions()).toStrictEqual([
            { type: increment.type, payload: undefined },
        ]);
    });

    it('calls decrement on click', () => {
        const { mockStore } = renderWithRedux(renderWithHelmet(<Counter />));
        fireEvent.click(screen.getByText(/decrement/i));
        expect(mockStore.getActions()).toStrictEqual([
            { type: decrement.type, payload: undefined },
        ]);
    });

    it('slow fetch success', async () => {
        const name = 'react-starter';
        mockedAxios.get.mockResolvedValueOnce({ status: 200, data: { name } });
        jest.useFakeTimers();

        const { mockStore } = renderWithRedux(renderWithHelmet(<Counter />));

        fireEvent.click(screen.getByText(/slow fetch/i));

        jest.runAllTimers();
        // Normally we would waitFor for an element to show up
        // https://github.com/testing-library/react-testing-library#complex-example
        await waitFor(() => null, { timeout: 500 });

        expect(mockStore.getActions()[0].type).toStrictEqual(fetchInitial.pending.type);
        expect(mockStore.getActions()[1].type).toStrictEqual(fetchInitial.fulfilled.type);
        expect(mockStore.getActions()[1].payload).toStrictEqual(name.length);
    });

    it('slow fetch error', async () => {
        mockedAxios.get.mockResolvedValueOnce({ status: 500 });
        jest.useFakeTimers();

        const { mockStore } = renderWithRedux(renderWithHelmet(<Counter />));

        fireEvent.click(screen.getByText(/slow fetch/i));

        jest.runAllTimers();
        // Normally we would waitFor for an element to show up
        // https://github.com/testing-library/react-testing-library#complex-example
        await waitFor(() => null, { timeout: 500 });

        expect(mockStore.getActions()[0].type).toStrictEqual(fetchInitial.pending.type);
        expect(mockStore.getActions()[1].type).toStrictEqual(fetchInitial.rejected.type);
        expect(mockStore.getActions()[1].payload).toBe('Something went wrong.');
    });
});
