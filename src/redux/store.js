import { configureStore } from '@reduxjs/toolkit';
import { countriesSlice } from './countries/countriesSlice';

const store = configureStore({
  reducer: {
    countries: countriesSlice.reducer,
  },
});

export default store;
