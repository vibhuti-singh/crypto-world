// coinService.js

import axios from "axios";

const apiUrl = '/api/v3/coins';

const getCoins = async () => {
  const response = await axios.get(`${apiUrl}/markets`, {
    params: {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 100,
      page: 1,
      sparkline: false,
      locale: 'en'
    }
  });
  return response.data;
};

const getCoinsCard = async (coinId) => {
  try {
    const response = await axios.get(`${apiUrl}/${coinId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getMarketChart = async (coinId) => {
  try {
    const response = await axios.get(`${apiUrl}/${coinId}/market_chart`, {
      params: {
        vs_currency: 'usd',
        days: 30,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const coinService = {
  getCoins,
  getCoinsCard,
  getMarketChart,
};

export default coinService;
