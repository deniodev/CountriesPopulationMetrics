import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const Endpoint = 'https://restcountries.com/v2/all';

export const fetchApi = createAsyncThunk('country/fetch', async () => {
  const response = await fetch(Endpoint);
  const data = await response.json();
  return data;
});

const populationSlice = createSlice({
  name: 'map',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchApi.fulfilled,
      (state, { payload }) => ({ ...state, countryList: [...payload] }));
  },
});

export default populationSlice.reducer;
