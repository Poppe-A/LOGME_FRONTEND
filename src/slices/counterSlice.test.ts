import { rootInitialState } from '../utils/test-helpers';
import counterReducer, { increment, decrement, fetchInitial } from './counterSlice';

describe('CounterSlice', () => {
    it('sets loading on fetch start', () => {
        expect(
            counterReducer({ ...rootInitialState.counter, loading: false }, fetchInitial.pending),
        ).toStrictEqual({ ...rootInitialState.counter, loading: true });
    });

    it('sets value and stop loading on fetch success', () => {
        expect(
            counterReducer(
                { ...rootInitialState.counter, loading: true },
                { type: fetchInitial.fulfilled.type, payload: 100 },
            ),
        ).toStrictEqual({ ...rootInitialState.counter, loading: false, value: 100 });
    });

    it('sets error and stop loading on fetch error', () => {
        expect(
            counterReducer(
                { ...rootInitialState.counter, loading: true },
                { type: fetchInitial.rejected, payload: 'Some error message.' },
            ),
        ).toStrictEqual({
            ...rootInitialState.counter,
            loading: false,
            error: 'Some error message.',
        });
    });

    it('increases number by one', () => {
        expect(counterReducer({ ...rootInitialState.counter, value: 1 }, increment)).toStrictEqual({
            ...rootInitialState.counter,
            value: 2,
        });
    });

    it('decreases number by one', () => {
        expect(counterReducer({ ...rootInitialState.counter, value: 1 }, decrement)).toStrictEqual({
            ...rootInitialState.counter,
            value: 0,
        });
    });
});
