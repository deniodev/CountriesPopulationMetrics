import { configureStore } from '@reduxjs/toolkit';
import populationSlice from './population/populationSlice';

const store = configureStore({
  reducer: {
    populationSlice,
  },
});

export default store;
