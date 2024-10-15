import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const asyncIncrement = createAsyncThunk('counter/asyncIncrement', async () => {
  return new Promise((resolve) => setTimeout(() => resolve(5), 1000));
});

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0, loading: false },
  reducers: {
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncIncrement.pending, (state) => {
        state.loading = true;
      })
      .addCase(asyncIncrement.fulfilled, (state, action) => {
        state.value += action.payload;
        state.loading = false;
      });
  },
});

const loggerMiddleware = (storeAPI) => (next) => (action) => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', storeAPI.getState());
  return result;
};

export const { decrement, reset } = counterSlice.actions;
export { asyncIncrement };

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
  middleware: [loggerMiddleware, thunk],
});

export default store;