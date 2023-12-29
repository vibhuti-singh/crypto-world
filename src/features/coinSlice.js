// coinSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import coinService from "./coinService";

const initialState = {
  coin: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  graphData: [], // Initialize graphData as an empty array
};

export const fetchCoin = createAsyncThunk("FETCH/COIN", async () => {
  return await coinService.getCoins();
});

export const fetchCoinDetails = createAsyncThunk("FETCH/DETAILS", async (coinId) => {
  return await coinService.getCoinsCard(coinId);
});

export const fetchMarketChart = createAsyncThunk("FETCH/MARKET_CHART", async (coinId) => {
  return await coinService.getMarketChart(coinId);
});

const coinSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.coin = action.payload;
    });
    builder.addCase(fetchCoinDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.coin = action.payload;
    });
    builder.addCase(fetchMarketChart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.graphData = action.payload;
    });

    builder.addCase(fetchCoin.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });
    builder.addCase(fetchCoinDetails.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });
    builder.addCase(fetchMarketChart.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });

    builder.addCase(fetchCoin.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(fetchCoinDetails.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(fetchMarketChart.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default coinSlice.reducer;
