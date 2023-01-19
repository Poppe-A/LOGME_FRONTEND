import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import type { RootState } from '../store';

// Fake async call
// eslint-disable-next-line no-promise-executor-return -- Just because this is an example
const sleep = (t = Math.random() * 200 + 300) => new Promise((resolve) => setTimeout(resolve, t));

interface ICounterState {
    value: number;
    loading: boolean;
    error?: string;
}

export const initialState: ICounterState = {
    value: 0,
    loading: false,
    error: '',
};

export const fetchInitial = createAsyncThunk<
    // Return type of the payload creator (passed to fulfilled type)
    number,
    // First argument to the payload creator
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type -- Just because this is an example
    void,
    {
        rejectValue: string;
    }
>('counter/fetchInitial', async (_, { rejectWithValue }) => {
    try {
        // For demo purpose let's say that the response is the length
        // of the project name in manifest and the api call is slow
        await sleep();
        const response = await axios.get<{ name: string }>('/manifest.json');
        return response.data.name.length;
        // eslint-disable-next-line @typescript-eslint/no-implicit-any-catch -- Just because this is an example
    } catch (err) {
        return rejectWithValue('Something went wrong.');
    }
});

export const incrementAsync = createAsyncThunk<
    // Return type of the payload creator (passed to fulfilled type)
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type -- Just because this is an example
    void,
    // First argument to the payload creator
    number
>('counter/incrementAsync', (amount, { dispatch }) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount));
    }, 1000);
});

export const slice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1;
        },
        decrement(state) {
            state.value -= 1;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount(state, action: PayloadAction<number>) {
            state.value += action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchInitial.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchInitial.fulfilled, (state, { payload }) => {
            state.value = payload;
            state.loading = false;
        });
        builder.addCase(fetchInitial.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        });
    },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.counter.value;

export const { increment, decrement, incrementByAmount } = slice.actions;

export default slice.reducer;
