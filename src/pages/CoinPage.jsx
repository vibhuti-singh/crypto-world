import { Chart, registerables} from "chart.js";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import coinService from '../features/coinService'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoinDetails, fetchMarketChart } from '../features/coinSlice';
import { Line } from 'react-chartjs-2';
Chart.register(...registerables);
const CoinPage = () => {
  const { coinId } = useParams();
  const [coinDetails, setCoinDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const graphData = useSelector((state) => state.coins.graphData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const details = await coinService.getCoinsCard(coinId);
        setCoinDetails(details);
        dispatch(fetchMarketChart(coinId));
      } catch (error) {
        setError('Error loading coin details');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [coinId, dispatch]);

  useEffect(() => {
    if (!loading) {
      dispatch(fetchCoinDetails(coinId));
    }
  }, [coinId, dispatch, loading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!coinDetails) {
    return <div>No data available for this coin</div>;
  }

  return (
    <>
      <div className="mt-8 w-5/6 shadow-2xl bg-slate-100 rounded overflow-hidden">
        <img className="w-48 h-48 " src={coinDetails.image.large} alt="Coin Icon" />
        <div className="p-6">
          <div className="text-2xl font-bold mb-2">{coinDetails.name}</div>
          <div className="text-gray-600 mb-4">{coinDetails.symbol}</div>
          <p className="text-gray-700 text">{coinDetails.description.en}</p>

          <h1 className="text-center text-gray-800 my-5 text-bold text-xl">Graph for {coinDetails.name}</h1>
          <Line
  data={{
    labels: graphData?.prices?.map((entry) => entry[0]) || [],
    datasets: [
      {
        label: 'Price (USD)',
        data: graphData?.prices?.map((entry) => entry[1]) || [],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: graphData?.prices?.map((entry, index, array) => {
          const currentPrice = entry[1];
          const previousPrice = array[index - 1]?.[1];

          if (previousPrice === undefined) {
            return 'rgba(75,192,192,1)';
          }

          return currentPrice > previousPrice ? 'rgba(0,255,0,1)' : 'rgba(255,0,0,1)';
        }) || [],
      },
    ],
  }}
/>
        </div>
      </div>
    </>
  );
};

export default CoinPage;
