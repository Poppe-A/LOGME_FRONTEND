import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';

import {
    increment,
    decrement,
    incrementByAmount,
    incrementAsync,
    fetchInitial,
} from '../../slices/counterSlice';
import type { RootState } from '../../store';
import Page from '../../components/Page';

const Counter: React.FC = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const loading = useSelector((state: RootState) => state.counter.loading);
    const error = useSelector((state: RootState) => state.counter.error);
    const [incrementAmount, setIncrementAmount] = useState('2');
    const dispatch = useDispatch();

    return (
        <>
            <Helmet>
                <title>Counter!!!!</title>
            </Helmet>
            <Page>
                <div>
                    {error && <p>{error}</p>}

                    {loading ? (
                        <p data-testid="counter-loading">Loading...</p>
                    ) : (
                        <p data-testid="counter-value">{count}</p>
                    )}

                    <div>
                        <button
                            aria-label="Increment value"
                            type="button"
                            onClick={() => dispatch(increment())}
                            disabled={loading}
                            data-testid="increment"
                        >
                            Increment
                        </button>
                        <button
                            aria-label="Decrement value"
                            type="button"
                            onClick={() => dispatch(decrement())}
                            disabled={loading}
                            data-testid="decrement"
                        >
                            Decrement
                        </button>
                    </div>
                    <button
                        aria-label="Slow fetch"
                        type="button"
                        onClick={() => dispatch(fetchInitial())}
                        disabled={loading}
                        data-testid="slow_fetch"
                    >
                        Slow fetch
                    </button>

                    <div>
                        <input
                            aria-label="Set increment amount"
                            value={incrementAmount}
                            onChange={(e) => setIncrementAmount(e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={() =>
                                dispatch(incrementByAmount(Number(incrementAmount) || 0))
                            }
                            data-testid="add_amount"
                        >
                            Add Amount
                        </button>
                        <button
                            type="button"
                            onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
                            data-testid="add_async"
                        >
                            Add Async
                        </button>
                    </div>
                </div>
            </Page>
        </>
    );
};

export default Counter;
